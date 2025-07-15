import { faqsQuery } from "../components/faqs/query";
import { footerQuery } from "../components/footer/query";
import { headerQuery } from "../components/header/query";
import { scrollingImagesQuery } from "../components/scrolling-images/query";
import { spotlightQuery } from "../components/spotlight/query";
import { itineraryQuery } from "../components/itinerary/query";
import { tripIntroOutroQuery } from "../components/info-section/query";
import { tripLogisticsQuery } from "../components/trip-logistics/query";
import { facilitiesQuery } from "../pages/trips/facilities/query";
import { bookingFormQuery } from "../pages/trips/booking-form/query";
import { aboutIntroQuery } from "../pages/about/intro/query";
import { teamMemberQuery } from "../pages/about/team-members/query";
import { quotesQuery } from "../components/quotes/query";
import { videoQuery } from "../components/video/query";
import { testimonialsQuery } from "../pages/testimonials/testimonial-listing/query";

export const pageQuery = `
*[_type in ["page"]]{
  key,
  template,
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
    ${teamMemberQuery},
    ${quotesQuery},
    ${videoQuery},
    ${testimonialsQuery}
  },
  metadata->{
    title,
    description
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
