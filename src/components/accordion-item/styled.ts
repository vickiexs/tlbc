import styled from "styled-components";

export const StyledAccordionContainer = styled(`div`)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const StyledAccordionHeader = styled(`button`)(({ theme }) => ({
  gap: theme.spacing(3),
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
    marginLeft: theme.spacing(2),
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
      marginLeft: theme.spacing(1),
      height: "13px",
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
