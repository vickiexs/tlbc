import { PortableTextBlock } from "@portabletext/types";

import { ImageProps } from "../../../../components/image/type";

export interface HostProps {
  name: string;
  role: string;
  instagram?: string;
  image: ImageProps;
  bio: PortableTextBlock;
  bioSummary: string;
  imageLeft?: boolean;
  buttonLabel: string;
}
