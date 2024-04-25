import { imageQuery } from "../../../components/image/query";

export const aboutIntroQuery = `
_type == "infoSection" => {
  _type,
  content[],
  ${imageQuery}
}`;
