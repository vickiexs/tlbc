import styled from "styled-components";

import { Link } from "react-router-dom";

export const StyledNavLink = styled(Link).withConfig({
  shouldForwardProp: (props) => props !== "isActive",
})<{
  variation: string;
  isActive: boolean;
}>(({ theme, variation, isActive }) => ({
  display: "table",
  position: "relative",
  color: "inherit",
  fontWeight: 600,
  textDecoration: "none",
  textTransform: "uppercase",
  "&:before": {
    transition: "500ms",
    height: "2px",
    content: '""',
    position: "absolute",
    backgroundColor:
      variation === "white" ? theme.palette.text : theme.palette.white,
    width: isActive ? "100%" : "0%",
    bottom: "-3px",
  },
  "&:hover:before": {
    width: "100%",
  },
}));
