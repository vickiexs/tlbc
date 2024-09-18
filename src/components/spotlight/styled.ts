import styled from "styled-components";

export const StyledSpotlightContainer = styled(`div`)(() => ({
  height: "100svh",
  width: "100%",
  position: "relative",
  overflow: "hidden",
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

export const StyledOverlay = styled(`div`)(() => ({
  position: "absolute",
  height: "100%",
  width: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.25)",
}));

export const StyledVideoOverlay = styled(`div`)(() => ({
  position: "absolute",
  height: "100%",
  width: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 1,
  pointerEvents: "none",
}));

export const StyledTextOverlay = styled(`div`).withConfig({
  shouldForwardProp: (props) => props !== "darkText",
})<{ darkText: boolean }>(({ theme, darkText }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
  color: darkText ? theme.palette.text : theme.palette.white,
  position: "absolute",
  top: 0,
  zIndex: 3,
  textShadow: `1px 1px 10px rgba(0, 0, 0, 0.1)`,
  pointerEvents: "none",
  padding: `0 ${theme.spacing(15)}`,
  textAlign: "center",
  width: "100%",
}));

export const StyledTextContainer = styled(`div`)(({ theme }) => ({
  [`@media ${theme.breakpoints.sm}`]: {
    minHeight: "320px",
  },
}));

export const StyledHeading = styled(`h1`)(({ theme }) => ({
  fontSize: theme.fontSize(20),
  fontWeight: theme.fontWeight.semiBold,
  textTransform: "uppercase",
  textAlign: "center",
  letterSpacing: "0.15rem",
  margin: 0,

  [`@media ${theme.breakpoints.lg}`]: {
    fontSize: theme.fontSize(15),
  },
  [`@media ${theme.breakpoints.md}`]: {
    fontSize: theme.fontSize(12),
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
    marginTop: theme.spacing(5),
  },
}));

export const StyledVideoContainer = styled(`div`)(() => ({
  position: "relative",
  top: 0,
  width: "100%",
  overflow: "hidden",
  height: "100svh",
}));
