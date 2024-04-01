import styled from "styled-components";

export const StyledContainer = styled(`div`)(() => ({
  height: "100vh",
  width: "100%",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const StyledLogoContainer = styled(`div`)(({ theme }) => ({
  height: "174px",
  width: "200px",

  [`@media ${theme.breakpoints.md}`]: {
    height: "130px",
    width: "150px",
  },
}));

export const StyledHeading = styled(`h1`)(({ theme }) => ({
  fontSize: theme.fontSize(10),

  [`@media ${theme.breakpoints.md}`]: {
    fontSize: theme.fontSize(8),
  },
}));
