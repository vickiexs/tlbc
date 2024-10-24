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

export const StyledContent = styled(`div`)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "3200px",
  minWidth: "5000px",

  position: "relative",
  left: "50%",
  top: "50%",
  transform: "translateX(-50%) translateY(-50%)",

  [`@media ${theme.breakpoints.xl}`]: {
    minHeight: "2500px",
  },
}));

export const StyledLogoContainer = styled(`div`)(({ theme }) => ({
  height: "3000px",
  width: "3000px",
  marginBottom: theme.spacing(70),

  svg: {
    height: "100%",
    width: "100%",
  },

  [`@media ${theme.breakpoints.xl}`]: {
    height: "2000px",
    width: "2000px",
  },
  [`@media ${theme.breakpoints.lg}`]: {
    height: "1500px",
    width: "1500px",
  },
}));

export const StyledHeading = styled(`h1`)(({ theme }) => ({
  fontWeight: theme.fontWeight.semiBold,
  fontSize: theme.fontSize(70),
  textAlign: "center",
  letterSpacing: "0.1rem",

  [`@media ${theme.breakpoints.xl}`]: {
    fontSize: theme.fontSize(45),
  },
  [`@media ${theme.breakpoints.lg}`]: {
    fontSize: theme.fontSize(35),
  },
  [`@media ${theme.breakpoints.md}`]: {
    fontWeight: theme.fontWeight.semiBold,
    maxWidth: "1500px",
  },
}));
