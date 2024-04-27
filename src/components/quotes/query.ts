import { imageQuery } from "../image/query";

export const testimonialExcerptQuery = `
_type == "testimonialExcerpts" => {
  _type,
  eyebrowHeading,
  testimonials[]->{
    fullName,
    location,
    testimonialExcerpt,
    ${imageQuery}
  }
}`;
