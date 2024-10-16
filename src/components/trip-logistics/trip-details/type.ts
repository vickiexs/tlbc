import { PortableTextBlock } from "@portabletext/types";

import { HeadedContentBlockProps as HeadedContentBlock } from "../../headed-content-block/type";

export interface TripDetailsProps {
  tripDetails: TripDetails[];
  bookCallInfo: PortableTextBlock;
}

export interface TripDetails {
  codename?: string;
  dates: HeadedContentBlock;
  price: HeadedContentBlock;
  spaces: HeadedContentBlock;
  location: HeadedContentBlock;
}
