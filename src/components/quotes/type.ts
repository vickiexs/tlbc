import { ImageProps } from "../image/type";

export interface QuotesProps {
  testimonials: Testimonial[];
}

export interface Testimonial {
  fullName: string;
  location: string;
  testimonialExcerpt: string;
  image: ImageProps;
}
