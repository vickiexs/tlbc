import styled from "styled-components";

import { Link } from "react-router-dom";

export const StyledNavLink = styled(Link).withConfig({
  shouldForwardProp: (props) =>
    props !== "isActive" && props !== "underlineColor",
})<{
  underlineColor: string | undefined;
  isActive: boolean;
}>(({ theme, underlineColor, isActive }) => ({
  display: "table",
  position: "relative",
  color: "inherit",
  fontWeight: 600,
  textDecoration: "none",
  textTransform: "uppercase",
  WebkitTapHighlightColor: "transparent",
  "&:before": {
    transition: "all 500ms ease-in-out",
    height: "2px",
    content: '""',
    position: "absolute",
    backgroundColor: underlineColor ? underlineColor : theme.palette.text,
    width: isActive ? "100%" : "0%",
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
