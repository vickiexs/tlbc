import { StyledSpotlightContainer } from "./styled";
import { SpotlightProps } from "./type";

export default function Spotlight({ heading }: SpotlightProps) {
  return <StyledSpotlightContainer>{heading}</StyledSpotlightContainer>;
}
