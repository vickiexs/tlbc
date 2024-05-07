import styled from "styled-components";

export const StyledVideoContainer = styled(`div`)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),

  [`@media ${theme.breakpoints.md}`]: {
    paddingTop: theme.spacing(10),
  },
  [`@media ${theme.breakpoints.sm}`]: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(7),
  },
}));

export const StyledVideoWrapper = styled(`div`)(() => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  maxWidth: "1500px",
}));
