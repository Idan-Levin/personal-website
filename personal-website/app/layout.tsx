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
  title: "Idan Levin",
  description: "Personal website of Idan Levin - Building OpenCommerce, Venture Partner at Collider",
  icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/png",
      }
    ],
    shortcut: ["/icon.png"],
    apple: [
      {
        url: "/icon.png",
        type: "image/png",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
