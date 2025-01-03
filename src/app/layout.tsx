import type { Metadata } from "next";
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
  openGraph: {
    type: "website",
    url: "https://www.foodcs.co.uk/",
    title:
      "FoodCS | Bridging Creativity and Industry for Groundbreaking Food Innovation",
    description:
      "FoodCS is where food product development experts and businesses collaborate to create groundbreaking solutions. Our platform bridges the gap between creativity and industry needs, driving innovation while fostering meaningful professional connections.",
    images: [
      {
        url: "https://res.cloudinary.com/shareupload/image/upload/v1735843121/dg99zuxggmdaov9pzexg.png", // Replace with the URL of your og:image
        width: 1200,
        height: 630,
        alt: "FoodCS Platform - Bridging Creativity and Industry",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
