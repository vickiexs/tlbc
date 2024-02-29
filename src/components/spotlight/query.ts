import { imageQuery } from "../image/query";

export const spotlightQuery = `
_type == "spotlight" => {
  _type,
  heading,
  subheadings[],
  ${imageQuery},
  darkText
}`;
