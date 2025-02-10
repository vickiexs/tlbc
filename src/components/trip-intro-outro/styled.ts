import styled from "styled-components";

export const StyledTripIntroduction = styled(`div`)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(20),

  [`@media ${theme.breakpoints.xxl}`]: {
    gap: theme.spacing(15),
  },
  [`@media ${theme.breakpoints.lg}`]: {
    flexDirection: "column",
    gap: theme.spacing(10),
  },
  [`@media ${theme.breakpoints.md}`]: {
    flexDirection: "column",
    gap: theme.spacing(8),
  },
}));

export const StyledTextContainer = styled(`div`)(() => ({
  width: "100%",
  textAlign: "justify",
}));

export const StyledImageContainer = styled(`div`)(() => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "100%",
}));

export const StyledImage = styled(`div`).withConfig({
  shouldForwardProp: (props) => props !== "hasCaption",
})<{
  hasCaption: boolean;
}>(({ theme, hasCaption }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  paddingBottom: hasCaption ? theme.spacing(8) : 0,

  [`@media ${theme.breakpoints.lg}`]: {
    position: "relative",
    paddingBottom: 0,
  },
}));

export const StyledCaption = styled(`div`)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  fontStyle: "italic",
  fontSize: theme.fontSize(4),
  marginTop: theme.spacing(2),

  [`@media ${theme.breakpoints.lg}`]: {
    position: "relative",
  },
  [`@media ${theme.breakpoints.md}`]: {
    fontSize: theme.fontSize(3),
    marginTop: theme.spacing(1),
  },
}));
