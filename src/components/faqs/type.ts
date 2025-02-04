import { PortableTextBlock } from "@portabletext/types";

export interface FAQProps {
  faqs?: FAQItems[];
  viewMoreLabel?: string;
  viewLessLabel?: string;
  displaySingleColumn: boolean;
}

interface FAQItems {
  question: string;
  answer: PortableTextBlock;
}
