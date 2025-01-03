import type { Metadata } from "next";
import { MetaTags } from "@/components";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title:
    "FoodCS | Bridging Creativity and Industry for Groundbreaking Food Innovation",
  description:
    "FoodCS is where food product development experts and businesses collaborate to create groundbreaking solutions. Our platform bridges the gap between creativity and industry needs, driving innovation while fostering meaningful professional connections.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MetaTags
        title="FoodCS | Bridging Creativity and Industry for Groundbreaking Food Innovation"
        description="FoodCS is where food product development experts and businesses collaborate to create groundbreaking solutions. Our platform bridges the gap between creativity and industry needs, driving innovation while fostering meaningful professional connections."
        image="https://res.cloudinary.com/shareupload/image/upload/v1735843121/dg99zuxggmdaov9pzexg.png"
        url="https://res.cloudinary.com/shareupload/image/upload/v1735843121/dg99zuxggmdaov9pzexg.png"
      />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
