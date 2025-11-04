import styled from "styled-components";

import IconButton from "../icon-button";

export const VideoContainer = styled("div")(({ theme }) => ({
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

export const VideoWrapper = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  maxWidth: "1500px",
}));

export const Thumbnail = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  height: "75vh",

  ".play-icon": {
    zIndex: 1,
    position: "absolute",
    transform: "scale(1)",
    transition: "all 300ms ease-in-out",

    "&:hover": {
      transform: "scale(1.1)",
    },

    svg: {
      fill: theme.palette.white,
      filter: "drop-shadow(0px 0px 15px #595959)",
      height: "100px",
      width: "100px",

      [`@media ${theme.breakpoints.md}`]: {
        height: "70px",
        width: "70px",
      },
    },
  },

  [`@media ${theme.breakpoints.md}`]: {
    height: "75vh",
  },
}));

export const PlayIcon = styled(IconButton)(() => ({
  position: "absolute",
  top: 0,
}));
