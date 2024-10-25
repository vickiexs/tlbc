import { imageQuery } from "../../atoms/image/query";

export const quotesQuery = `
_type == "quotes" => {
  _type,
  eyebrowHeading,
  quotes[]->{
    fullName,
    location,
    quote,
    ${imageQuery}
  }
}`;
