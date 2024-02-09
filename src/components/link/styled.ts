import styled from "styled-components";

import { Link } from "react-router-dom";

export const StyledLink = styled(Link)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  alignItems: "center",
  color: "inherit",
  fontSize: theme.fontSize(5),
  fontWeight: theme.fontWeight.semiBold,
  textTransform: "uppercase",
  textDecoration: "none",
  transition: "all 0.15s ease-in-out",
  svg: {
    transform: "rotate(-90deg)",
    height: "16px",
    fill: "inherit",
  },
  "&:hover": {
    color: theme.palette.primary.main,
    fill: theme.palette.primary.main,
    transition: "all 0.15s ease-in-out",
  },

  [`@media ${theme.breakpoints.md}`]: {
    fontSize: theme.fontSize(4),
  },
}));
