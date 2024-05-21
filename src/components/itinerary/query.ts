import { headedContentBlockQuery } from "../headed-content-block/query";
import { captionedImageFragment } from "../captioned-image/query";

export const itineraryQuery = `
_type == "itinerary" => {
  _type,
  eyebrowHeading,
  description,
  timeline[]->{
    ${headedContentBlockQuery}
  },
  additionalImages[]->{
    ${captionedImageFragment}
  }
}`;
