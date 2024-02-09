import { PortableTextBlock } from "@portabletext/types";

export interface HeadedContentBlockProps {
  heading: string;
  headingIcon?: string;
  content: PortableTextBlock;
}
