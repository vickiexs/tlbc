import styled from "styled-components";

export const StyledSpotlightContainer = styled(`div`)(() => ({
  height: "100vh",
  width: "100%",
  backgroundColor: "grey",
  position: "relative",
  overflowX: "hidden",
}));

export const StyledTextWrapper = styled(`div`)(() => ({
  display: "flex",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledTextContainer = styled(`div`)(() => ({}));

export const StyledHeading = styled(`h1`)(({ theme }) => ({
  fontSize: theme.fontSize(20),
  fontWeight: theme.fontWeight.semiBold,

  [`@media ${theme.breakpoints.xs}`]: {
    fontSize: theme.fontSize(10),
  },
}));
