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
  marginBottom: theme.spacing(5),

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
  fontSize: theme.fontSize(8),
  textAlign: "center",
  maxWidth: "300px",

  [`@media ${theme.breakpoints.md}`]: {
    fontSize: theme.fontSize(7),
    maxWidth: "250px",
  },
}));
