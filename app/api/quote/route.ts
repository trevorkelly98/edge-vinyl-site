import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

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

    const attachments: { filename: string; content: Buffer }[] = [];
    for (const photo of formData.getAll("photos")) {
      if (photo instanceof File && photo.size > 0) {
        const buffer = Buffer.from(await photo.arrayBuffer());
        attachments.push({ filename: photo.name || "photo.jpg", content: buffer });
      }
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
