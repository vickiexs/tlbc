import { imageQuery } from "../image/query";
import { linkQuery } from "../link/query";

export const spotlightQuery = `
_type == "spotlight" => {
  _type,
  heading,
  subheadings[],
  ${imageQuery},
  videoUrl,
  darkText,
  ${linkQuery}
}`;
