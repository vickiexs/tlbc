import { footerQuery } from "../components/footer/query";

export const HOMEPAGE_QUERY = `*[_type == "page"]{
  heading,
  ${footerQuery}
}`;
