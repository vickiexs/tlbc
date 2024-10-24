import Typography from "../../components/typography";

import { GenericObject } from "../../App";

import TestimonialListing from "./testimonial-listing";
import { TestimonialsProps } from "./testimonial-listing/type";

export default function Testimonials(pageData: GenericObject) {
  const { heading, sections } = pageData;

  const renderPageSection = (section: GenericObject, index: number) => {
    switch (section._type) {
      case "testimonials":
        return (
          <TestimonialListing {...(section as TestimonialsProps)} key={index} />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Typography variation="h1">{heading}</Typography>
      {sections.map((section: GenericObject, index: number) =>
        renderPageSection(section, index)
      )}
    </>
  );
}
