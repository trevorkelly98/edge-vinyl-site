import type { Metadata } from "next";
import { Archivo, Oswald } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const description =
  "Edge Vinyl is Utah's home for high-end vinyl wraps, paint protection film (PPF), chrome deletes, and motorcycle wraps. Text (801) 865-9601 for a quote.";

export const metadata: Metadata = {
  metadataBase: new URL("https://edge-vinyl.net"),
  title: "Edge Vinyl | Utah Vinyl Wraps, PPF & Chrome Deletes",
  description,
  openGraph: {
    title: "Edge Vinyl | Utah Vinyl Wraps, PPF & Chrome Deletes",
    description,
    url: "https://edge-vinyl.net",
    siteName: "Edge Vinyl",
    type: "website",
    images: [
      {
        url: "/gallery/featured-evo-x.jpg",
        width: 1179,
        height: 786,
        alt: "White Evo X wrapped by Edge Vinyl on a mountain road in fall",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Edge Vinyl | Utah Vinyl Wraps, PPF & Chrome Deletes",
    description,
    images: ["/gallery/featured-evo-x.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
