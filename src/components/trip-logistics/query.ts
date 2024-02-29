import {
  headedContentBlockQuery,
  headedContentBlockQueryWithIcon,
} from "../headed-content-block/query";
import { linkQuery } from "../link/query";
import { imageQuery } from "../image/query";

export const tripLogisticsQuery = `
_type == "tripLogistics" => {
  _type,
  eyebrowHeading,
  heading,
  dates->{
    ${headedContentBlockQueryWithIcon}
  },
  price->{
    ${headedContentBlockQueryWithIcon}
  },
  spaces->{
    ${headedContentBlockQueryWithIcon}
  },
  location->{
    ${headedContentBlockQueryWithIcon}
  },
  tripHosts->{
    heading,
    hosts[]->{
      nickname,
      ${imageQuery}
    },
    ${linkQuery}
  },
  bookCallInfo,
  included->{
    ${headedContentBlockQuery}
  },
  notIncluded->{
    ${headedContentBlockQuery}
  }
}`;
