import { PortableTextBlock } from "@portabletext/types";

export interface FAQProps {
  faqs: FAQItems[];
}

interface FAQItems {
  question: string;
  answer: PortableTextBlock;
}
