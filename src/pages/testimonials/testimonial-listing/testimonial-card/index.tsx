import { useState, useMemo } from "react";
import { useTheme } from "styled-components";
import { PortableText } from "@portabletext/react";
import { useWindowSize, useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";

import Typography from "../../../../components/typography";
import Avatar from "../../../../components/avatar";
import Image from "../../../../components/image";
import ArrowIcon from "../../../../components/icons/arrow";
import Ellipsis from "../../../../atoms/ellipsis";

import {
  StyledTestimonialCard,
  StyledCardHeader,
  StyledGuestDetails,
  StyledHeading,
  StyledTestimonial,
  StyledButton,
} from "./styled";
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
    <StyledTestimonialCard>
      <StyledCardHeader>
        <Avatar size={avatarSize}>
          <Image {...image} />
        </Avatar>
        <StyledGuestDetails>
          <StyledHeading>{`${fullName} (AGE ${age})`}</StyledHeading>
          <StyledHeading className="location">{location}</StyledHeading>
        </StyledGuestDetails>
      </StyledCardHeader>
      <StyledTestimonial isExpanded={isExpanded} id={`testimonial-${index}`}>
        <Typography variation="body">
          <PortableText value={testimonial} />
        </Typography>
        <StyledHeading className="trip">{trips}</StyledHeading>
      </StyledTestimonial>
      {isTextClamped && (
        <>
          {!isExpanded && <Ellipsis />}
          <StyledButton
            onClick={() => setIsExpanded((prevState) => !prevState)}
            className={classNames({ "read-less": isExpanded })}
          >
            {isExpanded ? collapseTextLabel : expandTextLabel}
            <ArrowIcon />
          </StyledButton>
        </>
      )}
    </StyledTestimonialCard>
  );
}
