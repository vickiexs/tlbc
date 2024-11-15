import styled from "styled-components";

export const StyledBackgroundOverlay = styled(`div`)(() => ({
  position: "fixed",
  top: 0,
  left: 0,
  height: "100vh",
  width: "100vw",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  zIndex: 20,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const StyledModalContainer = styled(`div`).withConfig({
  shouldForwardProp: (props) => props !== "borderRadius",
})<{ borderRadius?: number }>(({ theme, borderRadius }) => ({
  display: "flex",
  backgroundColor: theme.palette.white,
  borderRadius: borderRadius ? borderRadius : 0,
  zIndex: 21,
  overflowY: "scroll",

  [`@media ${theme.breakpoints.md}`]: {
    borderRadius: 0,
  },
}));

export const StyledCloseButton = styled(`button`)(({ theme }) => ({
  zIndex: 2,
  position: "absolute",
  right: 0,
  color: theme.palette.white,
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  backdropFilter: "blur(4px)",
  WebkitBackdropFilter: "blur(4px)",
  borderRadius: "50%",
  border: "none",
  height: "40px",
  width: "40px",
  padding: 0,
  marginTop: theme.spacing(4),
  marginRight: theme.spacing(4),
  transition: "all 250ms",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  svg: {
    marginTop: theme.spacing(1),
  },

  [`@media ${theme.breakpoints.md}`]: {
    height: "35px",
    width: "35px",
    position: "fixed",
  },
}));
