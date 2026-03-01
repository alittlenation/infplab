import type { Metadata } from "next";
import { Funnel_Sans, Geist_Mono, Cute_Font } from "next/font/google";
import "./globals.css";

const funnelSans = Funnel_Sans({
  variable: "--font-funnel-sans",
  subsets: ["latin"],
});

const cuteFont = Cute_Font({
  variable: "--font-cute-font",
  weight: "400",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "INFP의 상상은 현실이 된다",
  description: "INFP의 상상은 현실이 된다",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${funnelSans.variable} ${geistMono.variable} ${cuteFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
