import styled from "styled-components";

export const StyledFacilities = styled(`div`)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(8),
  ".carousel-container": {
    margin: `${theme.spacing(10)} 0`,

    [`@media ${theme.breakpoints.md}`]: {
      margin: `${theme.spacing(5)} 0`,
    },
  },
}));

export const StyledFloorplans = styled(`div`)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(10),

  [`@media ${theme.breakpoints.md}`]: {
    gap: theme.spacing(8),
  },
  [`@media ${theme.breakpoints.sm}`]: {
    flexDirection: "column",
    gap: theme.spacing(6),
  },
}));

export const StyledFloorplanContainer = styled(`div`)(() => ({
  height: "inherit",
  width: "100%",
}));

export const StyledFacilitiesText = styled(`div`)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(10),

  [`@media ${theme.breakpoints.sm}`]: {
    flexDirection: "column",
    gap: theme.spacing(5),
  },
}));

export const StyledColumn = styled(`div`)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(6),
  width: "100%",

  [`@media ${theme.breakpoints.sm}`]: {
    gap: theme.spacing(5),
  },
}));

export const StyledCarouselImage = styled(`div`).withConfig({
  shouldForwardProp: (props) => props !== "aspectRatio",
})<{ aspectRatio: number }>(({ theme, aspectRatio }) => ({
  height: "40vh",
  width: "auto",
  aspectRatio: `${aspectRatio}`,

  [`@media ${theme.breakpoints.md}`]: {
    height: "25vh",
  },
}));
