import styled from "styled-components";

import { Link as RouterLink } from "react-router-dom";

export const Link = styled(RouterLink).withConfig({
  shouldForwardProp: (props) => props !== "underlineColour",
})<{
  underlineColour: string | undefined;
}>(({ theme, underlineColour }) => ({
  position: "relative",
  display: "flex",
  gap: theme.spacing(2),
  alignItems: "center",
  color: "inherit",
  fontSize: theme.fontSize(4),
  fontWeight: theme.fontWeight.semiBold,
  textTransform: "uppercase",
  textDecoration: "none",
  transition: "all 0.15s ease-in-out",
  svg: {
    transform: "rotate(-90deg)",
    height: "16px",
    fill: "inherit",
  },
  "&:before": {
    transition: "all 500ms ease-in-out",
    height: "2px",
    content: '""',
    position: "absolute",
    backgroundColor: underlineColour ? underlineColour : theme.palette.text,
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
}));
