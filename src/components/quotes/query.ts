import { imageQuery } from "../../atoms/image/query";
import { linkQuery } from "../../atoms/link/query";

export const quotesQuery = `
_type == "quotes" => {
  _type,
  eyebrowHeading,
  quotes[]->{
    fullName,
    location,
    quote,
    ${imageQuery}
  },
  ${linkQuery}
}`;
