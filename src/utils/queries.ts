import { headerQuery } from "../components/header/query";
import { footerQuery } from "../components/footer/query";
import { spotlightQuery } from "../components/spotlight/query";
import { tripIntroOutroQuery } from "../components/trip-intro-outro/query";
import { facilitiesQuery } from "../pages/trips/facilities/query";
import { tripLogisticsQuery } from "../components/trip-logistics/query";
import { faqsQuery } from "../components/faqs/query";
import { scrollingImagesQuery } from "../components/scrolling-images/query";
import { bookingFormQuery } from "../pages/trips/booking-form/query";

export const pageQuery = `
*[_type in ["page"]]{
  key,
  path,
  sections[]->{
    ${spotlightQuery},
    ${tripIntroOutroQuery},
    ${scrollingImagesQuery},
    ${facilitiesQuery},
    ${tripLogisticsQuery},
    ${faqsQuery},
    ${bookingFormQuery}
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
