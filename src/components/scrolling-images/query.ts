import { imageFragment } from "../../common/image/query";
import { linkQuery } from "../../common/link/query";

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
