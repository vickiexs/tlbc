import styled from "styled-components";

export const StyledItineraryContainer = styled(`div`)(({ theme }) => ({
  ".swiper": {
    width: "100%",
    height: "100%",
    overflow: "visible",
    marginTop: theme.spacing(20),
  },
  ".swiper-wrapper": {
    height: "100%",
  },
  ".swiper-slide": {
    width: "auto",
    height: "auto",
  },

  ".swiper-slide:first-child": {
    ".hr": {
      width: "101%",
    },
  },
  ".swiper-slide:last-child": {
    ".hr": {
      width: "100%",
    },
  },
  ".swiper-button-next": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "44px",
    width: "44px",
    top: "unset",
    right: "45%",
    border: "none",
    borderRadius: "50%",
    padding: 0,
    transition: "all 500ms",
    transform: "rotate(-90deg)",
    svg: {
      height: "44px",
      padding: "10px",
      fill: theme.palette.white,
    },
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
    [`@media ${theme.breakpoints.xxl}`]: {
      right: "43%",
    },
    [`@media ${theme.breakpoints.lg}`]: {
      right: "40%",
    },
  },
  ".swiper-button-prev": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "44px",
    width: "44px",
    top: "unset",
    left: "45%",
    border: "none",
    borderRadius: "50%",
    padding: 0,
    transition: "all 250ms",
    transform: "rotate(90deg)",
    svg: {
      height: "44px",
      padding: "10px",
      fill: theme.palette.white,
    },
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
    [`@media ${theme.breakpoints.xxl}`]: {
      left: "43%",
    },
    [`@media ${theme.breakpoints.lg}`]: {
      left: "40%",
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

  ".vertical-itinerary": {
    margin: `${theme.spacing(10)} 0`,
  },
}));

export const StyledButtonContainer = styled(`div`)(({ theme }) => ({
  marginTop: theme.spacing(20),

  ".hr": {
    width: "4vw",
    margin: "auto",
    opacity: 0.35,

    [`@media ${theme.breakpoints.xxl}`]: {
      width: "5vw",
    },
  },
}));
