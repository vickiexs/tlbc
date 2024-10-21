import styled from "styled-components";

export const StyledContainer = styled(`div`)(() => ({
  height: "100svh",
  width: "100%",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const StyledContentWrapper = styled(`div`)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "415px",

  [`@media ${theme.breakpoints.md}`]: {
    minHeight: "350px",
  },
}));

export const StyledLogoContainer = styled(`div`)(({ theme }) => ({
  height: "250px",
  width: "250px",
  marginBottom: theme.spacing(10),

  svg: {
    height: "100%",
    width: "100%",
  },

  [`@media ${theme.breakpoints.md}`]: {
    height: "200px",
    width: "200px",
  },
}));

export const StyledHeading = styled(`h1`)(({ theme }) => ({
  fontWeight: theme.fontWeight.regular,
  fontSize: theme.fontSize(5),
  textAlign: "center",
  maxWidth: "400px",
  letterSpacing: "0.1rem",

  [`@media ${theme.breakpoints.md}`]: {
    fontWeight: theme.fontWeight.semiBold,
    fontSize: theme.fontSize(4),
    maxWidth: "150px",
  },
}));
