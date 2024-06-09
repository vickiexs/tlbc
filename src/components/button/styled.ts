import styled from "styled-components";

export const StyledButton = styled(`button`)(({ theme }) => ({
  backgroundColor: "transparent",
  fontFamily: "inherit",
  fontSize: theme.fontSize(4),
  fontWeight: theme.fontWeight.semiBold,
  padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
  textTransform: "uppercase",
  boxShadow: "none",
  cursor: "pointer",
  WebkitTapHighlightColor: "transparent",

  "&.btn-light": {
    color: theme.palette.white,
    border: `2px solid ${theme.palette.white}`,
    transition: "300ms",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
  },
  "&.btn-dark": {
    color: theme.palette.text,
    border: `2px solid ${theme.palette.text}`,
    transition: "300ms",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.05)",
    },
  },

  [`@media ${theme.breakpoints.md}`]: {
    fontSize: "14px",
    padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
  },
}));
