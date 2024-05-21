import styled from "styled-components";

export const StyledCaptionedImage = styled(`figure`).withConfig({
  shouldForwardProp: (props) => props !== "aspectRatio",
})<{ aspectRatio: number }>(({ aspectRatio }) => ({
  aspectRatio: `${aspectRatio}`,
  margin: 0,
}));
