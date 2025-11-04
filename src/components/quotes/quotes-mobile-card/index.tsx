import Avatar from "../../../common/avatar";
import Image from "../../../common/image";

import * as S from "./styled";
import { Quote } from "./type";

export default function QuotesCarouselCard({
  fullName,
  location,
  quote,
  image,
}: Quote) {
  return (
    <S.Card>
      <Avatar size={120}>
        <Image {...image} />
      </Avatar>
      <S.GuestInfo>{fullName}</S.GuestInfo>
      <S.GuestInfo className="location">{location}</S.GuestInfo>
      <S.Quote>{quote}</S.Quote>
    </S.Card>
  );
}
