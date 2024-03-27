import { PortableTextBlock } from "@portabletext/types";

import { HeadedContentBlockProps as HeadedContentBlock } from "../../../components/headed-content-block/type";
import { ImageProps as Image } from "../../../components/image/type";

export interface FacilitiesProps {
  description: PortableTextBlock;
  floorplans: Image[];
  facilitiesLeftCol: HeadedContentBlock[];
  facilitiesRightCol: HeadedContentBlock[];
  imageCarousel: Image[];
}
