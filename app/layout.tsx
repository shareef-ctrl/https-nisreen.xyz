import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "عام من العنوان 24 | هدية لنسرين النمر",
  description: "هدية إعلامية بمناسبة مرور عام على انطلاق قناة العنوان 24"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
