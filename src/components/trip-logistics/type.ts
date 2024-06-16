import { PortableTextBlock } from "@portabletext/types";

import { HeadedContentBlockProps as HeadedContentBlock } from "../headed-content-block/type";
import { ImageProps } from "../image/type";
import { TripHostsProps as TripHosts } from "./trip-hosts/type";

export interface TripLogisticsProps {
  dates: HeadedContentBlock;
  price: HeadedContentBlock;
  spaces: HeadedContentBlock;
  location: HeadedContentBlock;
  tripHosts: TripHosts;
  bookCallInfo: PortableTextBlock;
  included: HeadedContentBlock;
  notIncluded: HeadedContentBlock;
}

export interface Host {
  nickname: string;
  image: ImageProps;
}
