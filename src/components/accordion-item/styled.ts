import styled from "styled-components";

export const StyledAccordionContainer = styled(`div`)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const StyledAccordionHeader = styled(`button`)(({ theme }) => ({
  fontFamily: "Titillium Web",
  fontSize: theme.fontSize(5),
  fontWeight: theme.fontWeight.semiBold,
  color: "inherit",
  fill: "inherit",
  textTransform: "uppercase",
  textAlign: "left",
  padding: 0,
  border: "none",
  backgroundColor: "transparent",
  WebkitTapHighlightColor: "transparent",
  "&:hover": {
    cursor: "pointer",
  },
  svg: {
    transition: "all 0.5s ease-in-out",
    height: "15px",
  },
  "&.open": {
    svg: {
      transition: "all 0.75s ease-in-out",
      transform: "rotate(-180deg)",
    },
  },

  [`@media ${theme.breakpoints.md}`]: {
    fontSize: theme.fontSize(4),
    svg: {
      height: "13px",
    },
  },
}));

export const StyledAccordionHeaderLabel = styled(`div`)(() => ({
  display: "inline",
}));

export const StyledAccordionHeaderLastWord = styled(`div`)(({ theme }) => ({
  display: "inline",
  whiteSpace: "nowrap",
  svg: {
    marginLeft: theme.spacing(2),
    [`@media ${theme.breakpoints.md}`]: {
      marginLeft: theme.spacing(1),
    },
  },
}));

export const StyledAccordionContentWrapper = styled(`div`)(() => ({
  display: "grid",
  gridTemplateRows: "0fr",
  transition: "grid-template-rows 0.75s ease-in-out",
  "&.visible": {
    gridTemplateRows: "1fr",
  },
}));

export const StyledAccordionContent = styled(`div`)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  overflow: "hidden",
  p: {
    marginBottom: theme.spacing(5),
    [`@media ${theme.breakpoints.md}`]: {
      marginBottom: theme.spacing(3),
    },
  },
  [`@media ${theme.breakpoints.md}`]: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));
