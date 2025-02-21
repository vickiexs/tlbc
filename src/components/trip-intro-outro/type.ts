import { PortableTextBlock } from "@portabletext/types";

import { ImageProps } from "../../common/image/type";

export interface TripIntroOutroProps {
  content: PortableTextBlock;
  image: ImageProps;
  caption?: string;
}
