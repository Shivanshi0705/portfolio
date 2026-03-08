import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shivanshi Makkar | Portfolio",
  description:
    "Computer Science student at the University of Alberta building software, UX-driven products, and data-informed solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}