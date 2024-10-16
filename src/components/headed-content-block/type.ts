import { PortableTextBlock } from "@portabletext/types";

export interface HeadedContentBlockProps {
  heading: string;
  headingIcon?: string;
  icon?: string;
  content: PortableTextBlock;
}
