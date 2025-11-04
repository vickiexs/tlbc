import styled from "styled-components";

export const Container = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  ".swiper": {
    width: "100%",
    height: "100%",
    overflow: "visible",
    marginTop: theme.spacing(10),
  },
  ".swiper-wrapper": {
    height: "100%",
  },
  ".swiper-slide": {
    width: "auto",
    height: "auto",
  },
  ".swiper-pagination-bullet": {
    background: "transparent",
    border: `0.75px solid ${theme.palette.text} !important`,
    height: "8px",
    width: "8px",
    opacity: 1,
  },
  ".swiper-pagination-bullet-active": {
    backgroundColor: `${theme.palette.text} !important`,
  },

  ".link": {
    marginTop: theme.spacing(10),
  },
}));

export const Quote = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: theme.fontSize(8),
  textAlign: "center",
  maxWidth: "750px",
  marginBottom: theme.spacing(15),
  minHeight: "150px",

  [`@media ${theme.breakpoints.md}`]: {
    fontSize: theme.fontSize(5.5),
    maxWidth: "450px",
    minHeight: "130px",
    marginBottom: theme.spacing(10),
  },
}));

export const ImageLine = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "80px",
}));

export const ImageContainer = styled("div")(({ theme }) => ({
  position: "relative",
  margin: `0 ${theme.spacing(10)}`,
  zIndex: 2,

  [`@media ${theme.breakpoints.xxl}`]: {
    margin: "0 2vw",
  },
  [`@media ${theme.breakpoints.md}`]: {
    margin: `0 ${theme.spacing(4)}`,
  },
}));

export const Name = styled("div")(({ theme }) => ({
  fontSize: theme.fontSize(4),
  fontWeight: theme.fontWeight.semiBold,
  marginTop: theme.spacing(10),
  textTransform: "uppercase",
}));

export const Hr = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  position: "absolute",
  height: "100%",
  maxWidth: "1000px",

  ".hr": {
    width: "60vw",

    [`@media ${theme.breakpoints.md}`]: {
      width: "75vw",
    },
  },
}));

export const ArrowButton = styled("button")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  borderRadius: "50%",
  backgroundColor: "rgba(0, 0, 0, 0.75)",
  padding: 0,
  transition: "all 500ms",

  "&.left-arrow-btn": {
    transform: "rotate(90deg)",
    svg: {
      height: "40px",
      padding: "10px",
      fill: theme.palette.white,

      [`@media ${theme.breakpoints.md}`]: {
        height: "30px",
        padding: "8px",
      },
    },
  },
  "&.right-arrow-btn": {
    transform: "rotate(-90deg)",
    svg: {
      height: "40px",
      padding: "10px",
      fill: theme.palette.white,

      [`@media ${theme.breakpoints.md}`]: {
        height: "30px",
        padding: "8px",
      },
    },
  },

  "&.dark-mode": {
    backgroundColor: theme.palette.white,
    svg: {
      fill: theme.palette.text,
    },
  },
  "&.dark-mode:hover": {
    backgroundColor: "rgba(227, 227, 227, 1)",
  },

  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.85)",
  },
}));
