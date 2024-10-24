import styled from "styled-components";

export const StyledContainer = styled(`div`)(() => ({
  height: "100svh",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const StyledContentWrapper = styled(`div`)(() => ({
  position: "relative",
  top: 0,
  height: "100svh",
}));

export const StyledContent = styled(`div`)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "3200px",

  position: "relative",
  left: "50%",
  top: "50%",
  transform: "translateX(-50%) translateY(-50%)",
}));

export const StyledLogoContainer = styled(`div`)(({ theme }) => ({
  height: "2000px",
  width: "2000px",
  marginBottom: theme.spacing(50),

  svg: {
    height: "100%",
    width: "100%",
  },
}));

export const StyledHeading = styled(`h1`)(({ theme }) => ({
  fontWeight: theme.fontWeight.semiBold,
  fontSize: theme.fontSize(35),
  textAlign: "center",
  letterSpacing: "0.1rem",

  [`@media ${theme.breakpoints.md}`]: {
    fontWeight: theme.fontWeight.semiBold,
    maxWidth: "1500px",
  },
}));
