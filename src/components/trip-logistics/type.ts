import { PortableTextBlock } from "@portabletext/types";

import { HeadedContentBlockProps as HeadedContentBlock } from "../headed-content-block/type";
import { ImageProps } from "../image/type";
import { TripHostsProps as TripHosts } from "./trip-hosts/type";
import { TripDetails } from "./trip-details/type";

export interface TripLogisticsProps {
  tripDetails: TripDetails[];
  tripHosts: TripHosts;
  bookCallInfo: PortableTextBlock;
  included: HeadedContentBlock;
  notIncluded: HeadedContentBlock;
}

export interface Host {
  nickname: string;
  image: ImageProps;
}
