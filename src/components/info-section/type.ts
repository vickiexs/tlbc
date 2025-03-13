import { PortableTextBlock } from "@portabletext/types";

import { ImageProps } from "../../common/image/type";

export interface InfoSectionProps {
  content: PortableTextBlock;
  image: ImageProps;
  caption?: string;
  darkMode: boolean;
  imageFirst: boolean;
}
