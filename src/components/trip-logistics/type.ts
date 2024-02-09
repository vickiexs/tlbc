import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableTextBlock } from "@portabletext/types";

import { HeadedContentBlockProps as HeadedContentBlock } from "../headed-content-block/type";
import { LinkProps as Link } from "../link/type";

export interface TripLogisticsProps {
  dates: HeadedContentBlock;
  price: HeadedContentBlock;
  spaces: HeadedContentBlock;
  location: HeadedContentBlock;
  tripHosts: {
    heading: string;
    hosts: Host[];
    link: Link;
  };
  bookCallInfo: PortableTextBlock;
  included: HeadedContentBlock;
  notIncluded: HeadedContentBlock;
}

export interface Host {
  nickname: string;
  image: SanityImageSource;
}
