import { PortableTextBlock } from "@portabletext/types";

export interface AccordionProps {
  header: string;
  content: PortableTextBlock;
  index: number;
  activeItem: number;
  setActiveItem: (index: number) => void;
}
