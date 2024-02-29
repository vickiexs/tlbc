import { imageQuery } from "../image/query";

export const tripIntroOutroQuery = `
_type == "tripIntroOutro" => {
  _type,
  eyebrowHeading,
  heading,
  content[],
  ${imageQuery}
}`;
