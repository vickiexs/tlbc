import { imageFragment } from "../../atoms/image/query";
import { linkQuery } from "../../atoms/link/query";

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
