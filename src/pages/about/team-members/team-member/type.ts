import { PortableTextBlock } from "@portabletext/types";

import { ImageProps } from "../../../../atoms/image/type";

export interface TeamMemberProps {
  name: string;
  role: string;
  instagram?: string;
  image: ImageProps;
  bio: PortableTextBlock;
  bioSummary: string;
  imageLeft?: boolean;
  buttonLabel: string;
}
