import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://frontcraftdev.com"),
  title: "FrontCraftDev | Modern Website for Your Business",
  description:
  "I design and build modern websites that help businesses grow and stand out online.",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased} antialiased
        bg-[var(--background)] text-[var(--text-main)] min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
