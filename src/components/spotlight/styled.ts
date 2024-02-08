import styled from "styled-components";

export const StyledSpotlightContainer = styled(`div`)(() => ({
  height: "100vh",
  width: "100%",
  backgroundColor: "grey",
  position: "relative",
  overflowX: "hidden",
}));

export const StyledTextContainer = styled(`div`)<{ darkText: boolean }>(
  ({ theme, darkText }) => ({
    display: "flex",
    flexDirection: "column",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    color: darkText ? theme.palette.text : theme.palette.white,
  })
);

export const StyledHeading = styled(`h1`)(({ theme }) => ({
  fontSize: theme.fontSize(20),
  fontWeight: theme.fontWeight.semiBold,
  textTransform: "uppercase",
  margin: 0,

  [`@media ${theme.breakpoints.md}`]: {
    fontSize: theme.fontSize(10),
  },
}));

export const StyledSubtitle = styled(`div`)(({ theme }) => ({
  fontSize: theme.fontSize(6),
  fontWeight: theme.fontWeight.semiBold,
  textTransform: "uppercase",

  [`@media ${theme.breakpoints.md}`]: {
    fontSize: theme.fontSize(5),
  },
}));
