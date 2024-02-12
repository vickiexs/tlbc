import { headerQuery } from "../components/header/query";
import { footerQuery } from "../components/footer/query";
import { spotlightQuery } from "../components/spotlight/query";
import { tripIntroductionQuery } from "../components/trip-introduction/query";
import { tripLogisticsQuery } from "../components/trip-logistics/query";
import { faqsQuery } from "../components/faqs/query";

export const pageQuery = `
*[_type in ["page"]]{
  key,
  path,
  sections[]->{
    ${spotlightQuery},
    ${tripIntroductionQuery},
    ${tripLogisticsQuery},
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
