import { faqsQuery } from "../components/faqs/query";
import { footerQuery } from "../components/footer/query";
import { headerQuery } from "../components/header/query";
import { scrollingImagesQuery } from "../components/scrolling-images/query";
import { spotlightQuery } from "../components/spotlight/query";
import { itineraryQuery } from "../components/itinerary/query";
import { tripIntroOutroQuery } from "../components/trip-intro-outro/query";
import { tripLogisticsQuery } from "../components/trip-logistics/query";
import { facilitiesQuery } from "../pages/trips/facilities/query";
import { bookingFormQuery } from "../pages/trips/booking-form/query";
import { aboutIntroQuery } from "../pages/about/intro/query";
import { hostsQuery } from "../pages/about/hosts/query";

export const pageQuery = `
*[_type in ["page"]]{
  key,
  path,
  heading,
  sections[]->{
    ${spotlightQuery},
    ${tripIntroOutroQuery},
    ${itineraryQuery},
    ${scrollingImagesQuery},
    ${facilitiesQuery},
    ${tripLogisticsQuery},
    ${faqsQuery},
    ${bookingFormQuery},
    ${aboutIntroQuery},
    ${hostsQuery}
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
