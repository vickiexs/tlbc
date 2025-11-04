import { useState, useMemo } from "react";
import { useTheme } from "styled-components";
import { PortableText } from "@portabletext/react";
import { useWindowSize, useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";

import Typography from "../../../../components/typography";
import Avatar from "../../../../common/avatar";
import Image from "../../../../common/image";
import ArrowIcon from "../../../../common/icons/arrow";
import Ellipsis from "../../../../common/ellipsis";

import * as S from "./styled";
import { Testimonial } from "../type";

export default function TestimonialCard({
  fullName,
  age,
  location,
  trips,
  testimonial,
  image,
  index,
  expandTextLabel,
  collapseTextLabel,
}: Testimonial) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.md);

  const { width } = useWindowSize();

  const [isExpanded, setIsExpanded] = useState(false);

  const text = document.getElementById(`testimonial-${index}`);

  const avatarSize = useMemo(() => (isMobile ? 60 : 70), [isMobile]);

  const isTextClamped = useMemo(() => {
    if (text) {
      return text.scrollHeight > text.clientHeight;
    }
  }, [text, width]);

  return (
    <S.TestimonialCard>
      <S.CardHeader>
        <Avatar size={avatarSize}>
          <Image {...image} />
        </Avatar>
        <S.GuestDetails>
          <S.Heading>{`${fullName} (AGE ${age})`}</S.Heading>
          <S.Heading className="location">{location}</S.Heading>
        </S.GuestDetails>
      </S.CardHeader>
      <S.Testimonial isExpanded={isExpanded} id={`testimonial-${index}`}>
        <Typography variation="body">
          <PortableText value={testimonial} />
        </Typography>
        <S.Heading className="trip">{trips}</S.Heading>
      </S.Testimonial>
      {isTextClamped && (
        <>
          {!isExpanded && <Ellipsis />}
          <S.Button
            onClick={() => setIsExpanded((prevState) => !prevState)}
            className={classNames({ "read-less": isExpanded })}
          >
            {isExpanded ? collapseTextLabel : expandTextLabel}
            <ArrowIcon />
          </S.Button>
        </>
      )}
    </S.TestimonialCard>
  );
}
