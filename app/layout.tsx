import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dr. Latika Jindal - Academic Portfolio",
  description: "Associate Professor of Computer Science & Engineering at Medicaps University. Versatile academic with 15+ years of teaching, research, and innovation.",
  keywords: "Computer Science, Associate Professor, Research, Machine Learning, Blockchain, Medicaps University",
  authors: [{ name: "Dr. Latika Jindal" }],
  openGraph: {
    title: "Dr. Latika Jindal - Academic Portfolio",
    description: "Associate Professor with 15+ years of expertise in teaching, research, and innovation",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
