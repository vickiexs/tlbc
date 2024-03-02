import styled from "styled-components";

export const StyledCarouselContainer = styled(`div`)(({ theme }) => ({
  position: "relative",

  ".swiper": {
    width: "100%",
    height: `100%`,
    overflow: "visible",
  },
  ".swiper-wrapper": {
    height: "100%",
  },
  ".swiper-slide": {
    width: "auto",
    height: "100%",
  },
  ".swiper-button-next": {
    transform: "rotate(-90deg)",
    height: "28px",
    width: "28px",
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: "blur(4px)",
    borderRadius: "50%",
    padding: theme.spacing(4),
    fill: theme.palette.white,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    transition: "300ms",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
  },
  ".swiper-button-prev": {
    transform: "rotate(90deg)",
    height: "28px",
    width: "28px",
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: "blur(4px)",
    borderRadius: "50%",
    padding: theme.spacing(4),
    fill: theme.palette.white,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    transition: "300ms",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
  },
  ".swiper-button-next.hidden": {
    display: "none",
  },
  ".swiper-button-prev.hidden": {
    display: "none",
  },
  ".swiper-button-next:after": {
    display: "none",
  },
  ".swiper-button-prev:after": {
    display: "none",
  },
}));
