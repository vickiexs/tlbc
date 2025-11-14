import { PortableTextBlock } from "@portabletext/types";

import { ImageProps } from "../../common/image/type";

export interface SpotlightProps {
  heading: string;
  richTextHeading?: PortableTextBlock;
  subheadings?: string[];
  image: ImageProps;
  mobileImage: ImageProps;
  darkText: boolean;
  fixedHeight?: boolean;
  video?: string;
  videoWebOptimised?: string;
}
