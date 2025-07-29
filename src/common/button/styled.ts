import styled from "styled-components";

export const Button = styled("button")(({ theme }) => ({
  backgroundColor: "transparent",
  fontFamily: "Titillium Web",
  fontWeight: theme.fontWeight.semiBold,
  textTransform: "uppercase",
  boxShadow: "none",
  cursor: "pointer",
  WebkitTapHighlightColor: "transparent",
}));

export const PrimaryButton = styled(Button)(({ theme }) => ({
  fontSize: theme.fontSize(4),
  padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
  transition: "all 300ms ease-in-out",

  "&.light": {
    color: theme.palette.text,
    border: `2px solid ${theme.palette.text}`,
    transition: "300ms",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.05)",
    },
  },

  "&.dark": {
    color: theme.palette.white,
    border: `2px solid ${theme.palette.white}`,
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
  },

  "&:disabled": {
    opacity: 0.4,
    cursor: "default",
  },
  "&:disabled:hover": {
    backgroundColor: "transparent",
  },

  [`@media ${theme.breakpoints.md}`]: {
    fontSize: "14px",
    padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
  },
}));
