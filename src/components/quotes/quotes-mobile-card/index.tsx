import Avatar from "../../avatar";
import Image from "../../image";

import { StyledCard, StyledQuote, StyledGuestInfo } from "./styled";
import { Testimonial } from "../type";

export default function QuotesCarouselCard({
  fullName,
  location,
  testimonialExcerpt,
  image,
}: Testimonial) {
  return (
    <StyledCard>
      <Avatar size={120}>
        <Image {...image} />
      </Avatar>
      <StyledGuestInfo>{fullName}</StyledGuestInfo>
      <StyledGuestInfo>{location}</StyledGuestInfo>
      <StyledQuote>{testimonialExcerpt}</StyledQuote>
    </StyledCard>
  );
}
