import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavDropdownItem = styled(`button`)(({ theme }) => ({
  border: "none",
  backgroundColor: "transparent",
  padding: 0,
  color: "inherit",
  fontFamily: "Titillium Web",
  fontSize: theme.fontSize(4),
  fontWeight: theme.fontWeight.semiBold,
}));

export const StyledLabel = styled(`div`)<{
  dropdownMenuOpen: boolean;
  variation: string;
}>(({ theme, dropdownMenuOpen, variation }) => ({
  display: "inline-block",
  position: "relative",
  textTransform: "uppercase",
  "&:hover": {
    cursor: "pointer",
  },
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
    width: dropdownMenuOpen ? "0%" : "100%",
  },
}));

export const StyledDropdownMenu = styled(`div`)(({ theme }) => ({
  position: "absolute",
  backgroundColor: "white",
  marginLeft: "-20px",
  gap: theme.spacing(6),
  maxHeight: 0,
  transition: "all 1s ease-in-out",
  overflow: "hidden",
  a: {
    marginBottom: theme.spacing(3),
  },
  "a:first-child": {
    marginTop: theme.spacing(4),
  },
  "&.visible": {
    maxHeight: "170px",
  },
}));

export const StyledDropdownLink = styled(Link)(({ theme }) => ({
  display: "flex",
  color: "inherit",
  fontWeight: theme.fontWeight.semiBold,
  whiteSpace: "nowrap",
  textDecoration: "none",
  textTransform: "uppercase",
  padding: `0 ${theme.spacing(5)}`,
  "&:hover": {
    color: "#548990",
  },
}));
