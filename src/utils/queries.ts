import { headerQuery } from "../components/header/query";
import { footerQuery } from "../components/footer/query";
import { spotlightQuery } from "../components/spotlight/query";
import { faqsQuery } from "../components/faqs/query";

export const pageQuery = `
*[_type in ["page"]]{
  key,
  path,
  sections[]->{
    ${spotlightQuery},
    ${faqsQuery}
  }
}
`;

export const appQuery = `
{
  "header": ${headerQuery},
  "pages": ${pageQuery},
  "footer": ${footerQuery}
}
`;
