import Avatar from "../../../common/avatar";
import Image from "../../../common/image";

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
      <StyledGuestInfo className="location">{location}</StyledGuestInfo>
      <StyledQuote>{quote}</StyledQuote>
    </StyledCard>
  );
}
