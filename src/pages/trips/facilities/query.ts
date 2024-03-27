import { imageFragment } from "../../../components/image/query";

export const facilitiesQuery = `
_type == "facilities" => {
  _type,
  eyebrowHeading,
  heading,
  description,
  floorplans[] {
    ${imageFragment}
  },
  facilitiesLeftCol[]->{
    heading,
    content
  },
  facilitiesRightCol[]->{
    heading,
    content
  },
  imageCarousel[] {
    ${imageFragment}
  },
}`;
