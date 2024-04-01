import styled from "styled-components";

export const StyledButton = styled(`button`)(({ theme }) => ({
  backgroundColor: "transparent",
  fontFamily: "inherit",
  fontSize: theme.fontSize(5),
  fontWeight: theme.fontWeight.semiBold,
  padding: `${theme.spacing(3)} ${theme.spacing(5)}`,
  textTransform: "uppercase",
  boxShadow: "none",
  cursor: "pointer",

  "&.btn-light": {
    color: theme.palette.white,
    border: `2px solid ${theme.palette.white}`,
    transition: "300ms",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
  },

  [`@media ${theme.breakpoints.md}`]: {
    fontSize: theme.fontSize(4),
  },
}));
