import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// Load fonts
const montserrat = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Iniobong Ukpong",
  description: "Full Stack Web and App Developer",
  openGraph: {
    title: "Iniobong Ukpong",
    description: "Full Stack Web and App Developer",
    url: "https://iniobongukpong.com",
    siteName: "Iniobong Ukpong",
    images: [
      {
        url: "/home.png",
        width: 1200,
        height: 630,
        alt: "Iniobong Ukpong Portfolio",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
        {/* External Scripts */}
        <script
          src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"
          defer
        ></script>
      </head>
      <body className={`${montserrat.variable} antialiased`}>{children}</body>
    </html>
  );
}
