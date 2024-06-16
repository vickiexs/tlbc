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
    hostsHeading,
    hosts[]->{
      nickname,
      ${imageQuery}
    },
    specialGuestsHeading,
    specialGuests[]->{
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
