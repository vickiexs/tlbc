import styled from "styled-components";

export const VideoOverlay = styled("div")(({ theme }) => ({
  ".modal-container": {
    position: "relative",
    overflow: "visible",
    aspectRatio: "640 / 270",
    width: "80vw",
    backgroundColor: "transparent",
    ".close-button": {
      top: "-50px",
      right: "-50px",
      margin: 0,

      [`@media ${theme.breakpoints.md}`]: {
        top: theme.spacing(5),
        right: theme.spacing(5),
      },
    },

    [`@media ${theme.breakpoints.md}`]: {
      width: "100%",
      height: "100%",
      padding: `0 ${theme.spacing(7)}`,
    },
  },
}));

export const ModalContent = styled("div")(() => ({
  position: "relative",
  width: "100%",
}));
