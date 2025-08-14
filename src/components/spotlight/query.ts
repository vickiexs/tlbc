import { imageQuery, imageFragment } from "../../common/image/query";
import { linkQuery } from "../../common/link/query";

export const spotlightQuery = `
_type == "spotlight" => {
  _id,
  _type,
  heading,
  subheadings[],
  ${imageQuery},
  mobileImage {
    ${imageFragment}
  },
  darkText,
  ${linkQuery}
}`;
