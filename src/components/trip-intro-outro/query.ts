import { imageQuery } from "../image/query";

export const tripIntroOutroQuery = `
_type == "infoSection" => {
  _type,
  eyebrowHeading,
  heading,
  content[],
  ${imageQuery}
}`;
