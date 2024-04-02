import { useTheme } from "styled-components";
import { useMediaQuery } from "@uidotdev/usehooks";
import { InlineWidget } from "react-calendly";

import { PortableText } from "@portabletext/react";

import Typography from "../../../components/typography";

import { StyledContainer, StyledHeading } from "./styled";
import { BookingFormProps } from "./type";

export default function BookingForm({
  heading,
  description,
  link,
}: BookingFormProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.md);
  return (
    <StyledContainer>
      <StyledHeading>{heading}</StyledHeading>
      <Typography variation="body" className="booking-form-description">
        <PortableText value={description} />
      </Typography>
      <InlineWidget
        url={link}
        styles={{ height: isMobile ? "1100px" : "700px", width: "100%" }}
      />
    </StyledContainer>
  );
}
