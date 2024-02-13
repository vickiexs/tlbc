import styled from "styled-components";

export const StyledSpotlightContainer = styled(`div`)(() => ({
  height: "100vh",
  width: "100%",
  position: "relative",
}));

export const StyledBackgroundImage = styled(`div`)(() => ({
  height: "100vh",
  width: "100%",
  position: "absolute",
  overflow: "hidden",
  img: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
}));

export const StyledImageOverlay = styled(`div`)(() => ({
  position: "absolute",
  height: "100%",
  width: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.25)",
}));

export const StyledTextContainer = styled(`div`).withConfig({
  shouldForwardProp: (props) => props !== "darkText",
})<{ darkText: boolean }>(({ theme, darkText }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
  color: darkText ? theme.palette.text : theme.palette.white,
  position: "relative",
  zIndex: 3,
  textShadow: `1px 1px 10px rgba(0, 0, 0, 0.1)`,
}));

export const StyledHeading = styled(`h1`)(({ theme }) => ({
  fontSize: theme.fontSize(20),
  fontWeight: theme.fontWeight.semiBold,
  textTransform: "uppercase",
  letterSpacing: "0.35rem",
  margin: 0,

  [`@media ${theme.breakpoints.lg}`]: {
    fontSize: theme.fontSize(15),
  },
  [`@media ${theme.breakpoints.md}`]: {
    fontSize: theme.fontSize(10),
    letterSpacing: "0.15rem",
  },
}));

export const StyledSubtitle = styled(`div`)(({ theme }) => ({
  fontSize: theme.fontSize(6),
  fontWeight: theme.fontWeight.semiBold,
  textTransform: "uppercase",
  letterSpacing: "0.1rem",

  [`@media ${theme.breakpoints.md}`]: {
    fontSize: theme.fontSize(5),
    letterSpacing: "0.075rem",
  },
}));
