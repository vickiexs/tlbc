import { imageQuery, imageFragment } from "../../atoms/image/query";
import { linkQuery } from "../../atoms/link/query";

export const spotlightQuery = `
_type == "spotlight" => {
  _type,
  heading,
  subheadings[],
  ${imageQuery},
  mobileImage {
    ${imageFragment}
  },
  videoUrl,
  darkText,
  ${linkQuery}
}`;
