import styled from "styled-components";

import { Link } from "react-router-dom";

export const StyledNavLink = styled(Link)<{ variation: string }>(
  ({ theme, variation }) => ({
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
      width: "0%",
      bottom: "-3px",
    },
    "&:hover:before": {
      width: "100%",
    },
  })
);
