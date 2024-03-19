import { imageFragment } from "../image/query";
import { linkQuery } from "../link/query";

export const scrollingImagesQuery = `
_type == "tripGallery" => {
  _type,
  eyebrowHeading,
  heading,
  images[] {
    ${imageFragment}
  },
  ${linkQuery}
}`;
