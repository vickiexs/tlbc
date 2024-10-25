import { useNavigate } from "react-router-dom";

import Image from "../../../atoms/image";
import Button from "../../../atoms/button";

import {
  StyledSpotlightContainer,
  StyledBackgroundImage,
  StyledImageOverlay,
  StyledTextContainer,
  StyledHeading,
  StyledSubtitle,
} from "./styled";
import { SpotlightProps } from "./type";

export default function Spotlight({
  heading,
  subheadings,
  image,
  darkText,
  link,
}: SpotlightProps) {
  const navigate = useNavigate();

  return (
    <StyledSpotlightContainer id="spotlight">
      <StyledBackgroundImage>
        <StyledImageOverlay />
        <Image {...image} />
      </StyledBackgroundImage>
      <StyledTextContainer darkText={darkText}>
        <StyledHeading>{heading}</StyledHeading>
        <StyledSubtitle>{subheadings[0]}</StyledSubtitle>
        {link && (
          <Button
            label={link.label}
            variant={darkText ? "dark" : "light"}
            handleClick={() => navigate(link.link)}
          />
        )}
      </StyledTextContainer>
    </StyledSpotlightContainer>
  );
}
