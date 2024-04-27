import styled from "styled-components";

export const StyledContainer = styled(`div`)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  ".swiper": {
    width: "100%",
    height: "100%",
    overflow: "visible",
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
}));

export const StyledExcerpt = styled(`div`)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: theme.fontSize(8),
  textAlign: "center",
  maxWidth: "750px",
  marginBottom: theme.spacing(15),

  [`@media ${theme.breakpoints.md}`]: {
    fontSize: theme.fontSize(5),
    maxWidth: "400px",
  },
}));

export const StyledImageLine = styled(`div`)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "80px",
}));

export const StyledImageContainer = styled(`div`)(({ theme }) => ({
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

export const StyledName = styled(`div`)(({ theme }) => ({
  fontSize: theme.fontSize(4),
  fontWeight: theme.fontWeight.semiBold,
  marginTop: theme.spacing(5),
  textTransform: "uppercase",

  [`@media ${theme.breakpoints.md}`]: {
    fontSize: theme.fontSize(3),
  },
}));

export const StyledHr = styled(`div`)(({ theme }) => ({
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

export const StyledArrowButton = styled(`button`)(({ theme }) => ({
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
    },
  },
  "&.right-arrow-btn": {
    transform: "rotate(-90deg)",
    svg: {
      height: "40px",
      padding: "10px",
      fill: theme.palette.white,
    },
  },

  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.85)",
  },
}));
