import { headerQuery } from "../../components/header/query";
import { footerQuery } from "../../components/footer/query";

export const homepageQuery = `*[_type == "page" && name == "Home Page"]{
  heading,
  ${headerQuery},
  ${footerQuery}
}`;