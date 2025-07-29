import { useMemo, useState } from "react";
import { useTheme } from "styled-components";
import { useMediaQuery } from "@uidotdev/usehooks";

import TestimonialCard from "./testimonial-card";

import { splitArray } from "../../../utils/splitArray";

import * as S from "./styled";
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
    <S.ListingContainer>
      <S.Listing>
        {columns.map((column, firstIndex) => (
          <S.Column key={firstIndex}>
            {column.slice(0, pageSize).map((testimonial, secondIndex) => (
              <TestimonialCard
                {...testimonial}
                expandTextLabel={expandTextLabel}
                collapseTextLabel={collapseTextLabel}
                index={`${firstIndex}-${secondIndex}`}
                key={secondIndex}
              />
            ))}
          </S.Column>
        ))}
      </S.Listing>
      {pageSize <= Math.ceil(testimonials.length / columnNumber) && (
        <S.LoadMoreButton
          label={`${loadMoreLabel} (${hiddenTestimonials})`}
          handleClick={() => setPageSize((prevState) => prevState + 6)}
        />
      )}
    </S.ListingContainer>
  );
}
