import {
  headedContentBlockQuery,
  headedContentBlockQueryWithIcon,
} from "../headed-content-block/query";
import { linkQuery } from "../../common/link/query";
import { imageQuery } from "../../common/image/query";

export const tripLogisticsQuery = `
_type == "tripLogistics" => {
  _type,
  eyebrowHeading,
  heading,
  tripDetails[]->{
    codename,
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
