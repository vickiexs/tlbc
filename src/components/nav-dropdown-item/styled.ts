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
  textAlign: "inherit",
}));

export const StyledLabel = styled(`div`).withConfig({
  shouldForwardProp: (props) =>
    props !== "dropdownMenuOpen" && props !== "underlineColor",
})<{
  dropdownMenuOpen: boolean;
  underlineColor: string | undefined;
}>(({ theme, dropdownMenuOpen, underlineColor }) => ({
  display: "inline-block",
  position: "relative",
  textTransform: "uppercase",
  "&:hover": {
    cursor: "pointer",
  },
  "&:before": {
    transition: "all 500ms ease-in-out",
    height: "2px",
    content: '""',
    position: "absolute",
    backgroundColor: underlineColor ? underlineColor : theme.palette.text,
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
  transition: "all 0.75s ease-in-out, backgroundColor 0.25s ease-in-out",
  boxShadow: "0px 4px 2px -2px rgb(0 0 0 / 10%)",
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
  "&.transparent": {
    backgroundColor: "transparent",
    boxShadow: "none",
  },

  [`@media ${theme.breakpoints.md}`]: {
    position: "relative",
    margin: 0,
    boxShadow: "none",
    a: {
      marginTop: theme.spacing(5),
    },
    "a:first-child": {
      marginTop: theme.spacing(5),
    },
  },
}));

export const StyledDropdownLink = styled(Link).withConfig({
  shouldForwardProp: (props) =>
    props !== "dropdownMenuOpen" && props !== "underlineColor",
})<{
  underlineColor: string | undefined;
}>(({ theme, underlineColor }) => ({
  display: "flex",
  color: "inherit",
  fontWeight: theme.fontWeight.semiBold,
  whiteSpace: "nowrap",
  textDecoration: "none",
  textTransform: "uppercase",
  transition: "500ms",
  position: "relative",
  width: "fit-content",
  margin: `0 ${theme.spacing(5)}`,
  "&:before": {
    transition: "all 500ms ease-in-out",
    height: "2px",
    content: '""',
    position: "absolute",
    backgroundColor: underlineColor ? underlineColor : theme.palette.text,
    width: "0%",
    bottom: "-3px",
  },
  "&:hover:before": {
    width: "100%",
  },
}));
