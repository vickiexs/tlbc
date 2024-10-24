import styled from "styled-components";

export const StyledTestimonialCard = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(5),
  borderRadius: "10px",
  overflow: "hidden",
  backgroundColor: theme.palette.white,
  padding: theme.spacing(10),
  boxShadow: "5px 5px 14px 8px #dedede",

  [`@media ${theme.breakpoints.md}`]: {
    boxShadow: "3px 3px 12px 3px #dedede",
  },
  [`@media ${theme.breakpoints.sm}`]: {
    padding: theme.spacing(7),
  },
}));

export const StyledCardHeader = styled("div")(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(5),
  alignItems: "center",

  ".avatar": {
    minWidth: 60,
  },
}));

export const StyledGuestDetails = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));

export const StyledHeading = styled("div")(({ theme }) => ({
  fontSize: theme.fontSize(4),
  fontWeight: theme.fontWeight.semiBold,
  textTransform: "uppercase",

  "&.location": {
    fontWeight: theme.fontWeight.regular,
  },
  "&.trip": {
    textAlign: "left",
    fontWeight: theme.fontWeight.regular,
    fontStyle: "italic",
    letterSpacing: "0.3px",
    marginTop: "30px",
    lineHeight: "30px",
    [`@media ${theme.breakpoints.md}`]: {
      lineHeight: "26px",
    },
  },

  [`@media ${theme.breakpoints.md}`]: {
    fontSize: "14px",
  },
}));

export const StyledTestimonial = styled("div").withConfig({
  shouldForwardProp: (props) => props !== "isExpanded",
})<{ isExpanded: boolean }>(({ theme, isExpanded }) => ({
  position: "relative",
  textAlign: "justify",
  overflow: "hidden",
  height: "auto",
  maxHeight: isExpanded ? "100%" : "calc(8 * 30px)",

  p: {
    lineHeight: "30px",
    [`@media ${theme.breakpoints.md}`]: {
      lineHeight: "26px",
    },
  },

  em: {
    paddingRight: "1.5px",
  },

  [`@media ${theme.breakpoints.md}`]: {
    maxHeight: isExpanded ? "100%" : "calc(7 * 26px)",
  },
}));

export const StyledButton = styled("button")(({ theme }) => ({
  WebkitTapHighlightColor: "transparent",
  position: "relative",
  backgroundColor: "transparent",
  border: "none",
  padding: 0,
  display: "flex",
  gap: theme.spacing(2),
  alignItems: "center",
  alignSelf: "flex-start",
  color: "inherit",
  fontFamily: "Titillium Web",
  fontSize: theme.fontSize(4),
  fontWeight: theme.fontWeight.semiBold,
  textTransform: "uppercase",
  textDecoration: "none",
  transition: "all 0.15s ease-in-out",
  svg: {
    transform: "rotate(0deg)",
    transition: "all 0.3s ease-in-out",
    height: "12px",
    fill: "inherit",
  },
  "&:before": {
    transition: "all 500ms ease-in-out",
    height: "2px",
    content: '""',
    position: "absolute",
    backgroundColor: theme.palette.text,
    width: "0%",
    bottom: "-3px",

    [`@media ${theme.breakpoints.md}`]: {
      width: "0%",
    },
  },
  "&:hover:before": {
    width: "100%",

    [`@media ${theme.breakpoints.md}`]: {
      width: "0%",
    },
  },
  "&:hover": {
    transition: "all 0.15s ease-in-out",
  },

  "&.read-less": {
    svg: {
      transform: "rotate(180deg)",
      transition: "all 0.3s ease-in-out",
    },
  },

  [`@media ${theme.breakpoints.md}`]: {
    fontSize: "14px",
  },
}));
