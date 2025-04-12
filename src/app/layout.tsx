import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Header from "@/components/header";
import Providers from "@/components/providers";

const inter = Inter({
  variable: "--font-inter",
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
    <html lang="en" className={`${inter.variable} antialiased`}>
      <Providers>
        <body className="font-inter bg-background text-foreground relative tracking-tight w-full min-h-screen">
          <Header />
          <main className="relative w-full h-full overflow-hidden">{children}</main>
        </body>
      </Providers>
    </html>
  );
}
