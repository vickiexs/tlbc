import styled from "styled-components";

export const StyledCarouselCard = styled(`div`)(({ theme }) => ({
  maxWidth: "450px",

  [`@media ${theme.breakpoints.lg}`]: {
    maxWidth: "350px",
  },
}));

export const StyledCardHeading = styled(`div`)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  textTransform: "uppercase",
  fontSize: theme.fontSize(5),
  fontWeight: theme.fontWeight.semiBold,
}));

export const StyledLineContainer = styled(`div`)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  position: "relative",
  width: "100%",
  height: "20px",
  margin: `${theme.spacing(8)} 0`,

  ".hr": {
    position: "absolute",
    top: "50%",
    width: "150%",
    margin: 0,
  },
}));

export const StyledTimelineBullet = styled(`div`)(({ theme }) => ({
  position: "absolute",
  top: 0,
  height: "20px",
  width: "20px",
  borderRadius: "50%",
  backgroundColor: theme.palette.white,
}));
