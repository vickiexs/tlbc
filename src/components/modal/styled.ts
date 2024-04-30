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

export const StyledModalContainer = styled(`div`)(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette.white,
  borderRadius: "10px",
  zIndex: 21,
  overflowY: "scroll",

  [`@media ${theme.breakpoints.md}`]: {
    borderRadius: 0,
  },
}));
