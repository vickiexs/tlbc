import { useMemo, useState } from "react";
import { useTheme } from "styled-components";
import { useMediaQuery } from "@uidotdev/usehooks";

import TestimonialCard from "./testimonial-card";
import Button from "../../../common/button";

import { splitArray } from "../../../utils/splitArray";

import { StyledListingContainer, StyledListing, StyledColumn } from "./styled";
import { TestimonialsProps } from "./type";

export default function TestimonialListing({
  testimonials,
  loadMoreLabel,
  expandTextLabel,
  collapseTextLabel,
}: TestimonialsProps) {
  const theme = useTheme();
  const isDownLg = useMediaQuery(theme.breakpoints.lg);
  const isDownMd = useMediaQuery(theme.breakpoints.md);

  const [pageSize, setPageSize] = useState(6);

  const columnNumber = useMemo(() => {
    if (isDownMd) {
      return 1;
    } else if (isDownLg) {
      return 2;
    } else {
      return 3;
    }
  }, [isDownLg, isDownMd]);

  const columns = useMemo(
    () => splitArray(testimonials, columnNumber),
    [columnNumber, testimonials]
  );

  const hiddenTestimonials = useMemo(
    () => testimonials.length - columnNumber * pageSize,
    [columnNumber, pageSize, testimonials]
  );

  return (
    <StyledListingContainer>
      <StyledListing>
        {columns.map((column, firstIndex) => (
          <StyledColumn key={firstIndex}>
            {column.slice(0, pageSize).map((testimonial, secondIndex) => (
              <TestimonialCard
                {...testimonial}
                expandTextLabel={expandTextLabel}
                collapseTextLabel={collapseTextLabel}
                index={`${firstIndex}-${secondIndex}`}
                key={secondIndex}
              />
            ))}
          </StyledColumn>
        ))}
      </StyledListing>
      {pageSize <= Math.ceil(testimonials.length / columnNumber) && (
        <Button
          label={`${loadMoreLabel} (${hiddenTestimonials})`}
          variant="dark"
          handleClick={() => setPageSize((prevState) => prevState + 6)}
          className="load-more-button"
        />
      )}
    </StyledListingContainer>
  );
}
