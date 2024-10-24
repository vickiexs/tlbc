import { PortableTextBlock } from "@portabletext/types";

import { ImageProps as Image } from "../../../components/image/type";

export interface TestimonialsProps {
  testimonials: Testimonial[];
  loadMoreLabel: string;
  expandTextLabel: string;
  collapseTextLabel: string;
}

export interface Testimonial {
  fullName: string;
  age: number;
  location: string;
  trips: string;
  testimonial: PortableTextBlock;
  image: Image;
  index: string;
  expandTextLabel: string;
  collapseTextLabel: string;
}
