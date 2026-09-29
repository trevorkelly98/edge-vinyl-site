import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const MAX_PHOTOS = 5;
const MAX_FILE_BYTES = 10 * 1024 * 1024; // 10 MB per photo
const MAX_TOTAL_BYTES = 25 * 1024 * 1024; // 25 MB total (Resend caps at 40 MB)

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service is not configured yet." },
      { status: 500 }
    );
  }
  const resend = new Resend(apiKey);

  try {
    const formData = await req.formData();

    const name = String(formData.get("name") || "").trim();
    const contact = String(formData.get("contact") || "").trim();
    const vehicle = String(formData.get("vehicle") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !contact) {
      return NextResponse.json(
        { error: "Name and contact info are required." },
        { status: 400 }
      );
    }

    const photos = formData
      .getAll("photos")
      .filter((p): p is File => p instanceof File && p.size > 0);

    if (photos.length > MAX_PHOTOS) {
      return NextResponse.json(
        { error: `Please attach no more than ${MAX_PHOTOS} photos.` },
        { status: 400 }
      );
    }

    let totalBytes = 0;
    const attachments: { filename: string; content: Buffer }[] = [];
    for (const photo of photos) {
      if (!photo.type.startsWith("image/")) {
        return NextResponse.json(
          { error: "Only image files can be attached." },
          { status: 400 }
        );
      }
      if (photo.size > MAX_FILE_BYTES) {
        return NextResponse.json(
          {
            error: `"${photo.name}" is too large. Each photo must be under 10 MB.`,
          },
          { status: 400 }
        );
      }
      totalBytes += photo.size;
      if (totalBytes > MAX_TOTAL_BYTES) {
        return NextResponse.json(
          {
            error:
              "Photos are too large in total. Please keep them under 25 MB.",
          },
          { status: 400 }
        );
      }
      const buffer = Buffer.from(await photo.arrayBuffer());
      attachments.push({ filename: photo.name || "photo.jpg", content: buffer });
    }

    const { error } = await resend.emails.send({
      from: "Edge Vinyl Website <onboarding@resend.dev>",
      to: "trevor@edge-vinyl.com",
      subject: `New quote request from ${name}`,
      text: [
        `Name: ${name}`,
        `Contact: ${contact}`,
        `Vehicle: ${vehicle || "—"}`,
        ``,
        `What they want wrapped:`,
        message || "—",
        ``,
        attachments.length
          ? `${attachments.length} photo(s) attached.`
          : "No photos attached.",
      ].join("\n"),
      attachments,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong sending your request." },
      { status: 500 }
    );
  }
}
