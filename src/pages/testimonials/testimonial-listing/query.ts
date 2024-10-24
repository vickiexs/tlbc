import { imageQuery } from "../../../components/image/query";

export const testimonialsQuery = `
_type == "testimonials" => {
  _type,
  testimonials[]->{
    fullName,
    age,
    location,
    trips,
    testimonial,
    ${imageQuery}
  },
  loadMoreLabel,
  expandTextLabel,
  collapseTextLabel
}`;
