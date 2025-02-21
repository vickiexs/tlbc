import { imageFragment } from "../../common/image/query";

export const videoQuery = `
_type == "videoSection" => {
  _type,
  eyebrowHeading,
  videoUrl,
  thumbnail {
    ${imageFragment}
  },
  mobileThumbnail {
    ${imageFragment}
  }
}`;
