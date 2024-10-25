import { imageQuery } from "../../../atoms/image/query";

export const aboutIntroQuery = `
_type == "infoSection" => {
  _type,
  content[],
  ${imageQuery}
}`;
