import { imageQuery } from "../../common/image/query";
import { linkQuery } from "../../common/link/query";

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
