import styled from "styled-components";

export const CarouselContainer = styled("div")(({ theme }) => ({
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
      transition: "all 300ms",
      fill: theme.palette.text,
    },
    "&:hover": {
      svg: {
        transition: "all 300ms",
        fill: theme.palette.white,
      },
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
      fill: theme.palette.text,
    },
    "&:hover": {
      svg: {
        transition: "all 300ms",
        fill: theme.palette.white,
      },
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
}));

export const ButtonContainer = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(20),
  display: "block",

  [`@media ${theme.breakpoints.md}`]: {
    display: "none",
  },

  ".hr": {
    width: "4vw",
    margin: "auto",

    [`@media ${theme.breakpoints.xxl}`]: {
      width: "5vw",
    },
  },
}));
