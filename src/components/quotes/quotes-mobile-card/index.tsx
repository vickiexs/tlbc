import Avatar from "../../avatar";
import Image from "../../image";

import { StyledCard, StyledQuote, StyledGuestInfo } from "./styled";
import { Quote } from "./type";

export default function QuotesCarouselCard({
  fullName,
  location,
  quote,
  image,
}: Quote) {
  return (
    <StyledCard>
      <Avatar size={120}>
        <Image {...image} />
      </Avatar>
      <StyledGuestInfo>{fullName}</StyledGuestInfo>
      <StyledGuestInfo>{location}</StyledGuestInfo>
      <StyledQuote>{quote}</StyledQuote>
    </StyledCard>
  );
}
