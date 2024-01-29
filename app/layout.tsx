import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Spline_Sans_Mono } from "next/font/google";
import "./globals.css";

const fontBody = Spline_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Ian Goode",
  description: "Product Designer at Spotify in Dublin.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fontBody.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
