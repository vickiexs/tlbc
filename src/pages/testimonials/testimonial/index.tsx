import { useState } from "react";
import classNames from "classnames";
import { StyledAccordionHeader } from "../../../components/accordion-item/styled";
import Avatar from "../../../components/avatar/index";
import ArrowIcon from "../../../components/icons/arrow/index";
import {
  StyledTestimonial,
  StyledTestimonialContent,
  StyledTestimonialHeader,
  StyledUser,
  StyledTrip,
  StyledDescription,
} from "./styled";
import { TestimonialProps } from "./type";

export default function Testimonial({ user, locationLabel, trip, description, expandLabel, shrinkLabel }: TestimonialProps) {

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const avatarSize = 75

  return (
    <StyledTestimonial>
      <Avatar size={avatarSize}>
        <img
          src={`https://cdn.sanity.io/images/iarvujrb/production/96f93d974da5b27d791715f06c9ffb3baf3f7b33-3439x3439.jpg?w=${avatarSize}&h=${avatarSize}`}
        />
      </Avatar>
      <StyledTestimonialContent>
        <StyledTestimonialHeader>
          <StyledUser>{user.name}, {user.location}</StyledUser>
          <StyledTrip>{locationLabel} {trip}</StyledTrip>
        </StyledTestimonialHeader>
        <StyledDescription>{description}</StyledDescription>
        <StyledAccordionHeader
          className={classNames({ open: expanded })}
          onClick={handleExpandClick}>
          {expanded ? shrinkLabel : expandLabel}
          <ArrowIcon />
        </StyledAccordionHeader>
      </StyledTestimonialContent>
    </StyledTestimonial>
  );
}