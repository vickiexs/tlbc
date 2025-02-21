import { imageQuery, imageFragment } from "../../common/image/query";
import { linkQuery } from "../../common/link/query";

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
