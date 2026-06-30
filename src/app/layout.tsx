import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DG Mawai | Official Website - Rajasthani Rasiya Singer",
  description:
    "Official website of DG Mawai - Rajasthani Rasiya Singer. Book shows, listen to trending songs, upcoming events, and more.",
  keywords: [
    "DG Mawai",
    "Rasiya",
    "Rajasthani Singer",
    "Gurjar Rasiya",
    "Book Show",
    "Live Events",
  ],
  openGraph: {
    title: "DG Mawai | Official Website",
    description:
      "Official website of DG Mawai - Rajasthani Rasiya Singer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-[Poppins] antialiased">{children}</body>
    </html>
  );
}
