import { headerFragment } from "../components/header/query";
import { footerFragment } from "../components/footer/query";

export const appQuery = `
*[_type in ["header", "footer"]]{
  _type == "header" => {
    ${headerFragment}
  },
  _type == "footer" => {
    ${footerFragment}
  }
}
`;
