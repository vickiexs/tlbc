import { PortableTextBlock } from "@portabletext/types";
import { HeadedContentBlockProps as HeadedContentBlock } from "../headed-content-block/type";
import { CaptionedImageProps as CaptionedImage } from "../captioned-image/type";

export interface ItineraryProps {
  description: PortableTextBlock;
  timeline: HeadedContentBlock[];
  additionalImages?: CaptionedImage[];
}
