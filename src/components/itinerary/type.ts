import { PortableTextBlock } from "@portabletext/types";
import { HeadedContentBlockProps } from "../headed-content-block/type";

export interface ItineraryProps {
  description: PortableTextBlock;
  timeline: HeadedContentBlockProps[];
}
