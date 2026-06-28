import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "عام من العنوان 24 | هدية لنسرين النمر",
  description: "هدية رقمية تفاعلية بمناسبة مرور عام على تدشين قناة العنوان 24."
};

export default function GiftLayout({ children }: { children: React.ReactNode }) {
  return children;
}
