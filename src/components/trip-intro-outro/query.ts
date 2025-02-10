import { imageQuery } from "../../atoms/image/query";

export const tripIntroOutroQuery = `
_type == "infoSection" => {
  _type,
  eyebrowHeading,
  heading,
  content[],
  ${imageQuery},
  caption
}`;
