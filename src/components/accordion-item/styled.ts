import styled from "styled-components";

export const StyledAccordionContainer = styled(`div`)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const StyledAccordionHeader = styled(`button`)(({ theme }) => ({
  fontFamily: "inherit",
  fontSize: theme.fontSize(5),
  fontWeight: theme.fontWeight.semiBold,
  color: "inherit",
  fill: "inherit",
  textTransform: "uppercase",
  textAlign: "left",
  padding: 0,
  marginBottom: theme.spacing(3),
  border: "none",
  backgroundColor: "transparent",
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
    marginBottom: theme.spacing(2),
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

export const StyledAccordionContent = styled(`div`)(() => ({
  maxHeight: 0,
  height: 0,
  opacity: 0,
  pointerEvents: "none",
  "&.visible": {
    maxHeight: "650px",
    height: "100%",
    opacity: 1,
    pointerEvents: "auto",
    transition: "all 1.5s ease-in-out",
  },
}));
