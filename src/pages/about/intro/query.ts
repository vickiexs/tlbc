import { imageQuery } from "../../../common/image/query";

export const aboutIntroQuery = `
_type == "infoSection" => {
  _type,
  content[],
  ${imageQuery}
}`;
