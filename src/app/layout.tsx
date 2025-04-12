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
  title: {
    default: "Captin",
    template: "%s | Captin",
  },
  description: "Captin",
};

export const runtime = "edge";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <body className="font-geist-sans bg-background text-foreground relative tracking-tight w-full min-h-screen">
          {children}
        </body>
      </html>
  );
}