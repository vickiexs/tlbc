import { headedContentBlockQuery } from "../headed-content-block/query";

export const itineraryQuery = `
_type == "itinerary" => {
  _type,
  eyebrowHeading,
  description,
  timeline[]->{
      ${headedContentBlockQuery}
  }
}`;