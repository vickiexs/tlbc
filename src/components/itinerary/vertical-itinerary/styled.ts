import styled from "styled-components";

export const StyledItineraryContainer = styled(`div`)(() => ({
  display: "flex",
  position: "relative",
}));

export const StyledItems = styled(`div`)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(6),
  flex: 3,
}));

export const StyledItemInfoContainer = styled(`div`)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  position: "relative",
}));

export const StyledCardHeading = styled(`div`)(({ theme }) => ({
  textTransform: "uppercase",
  fontSize: theme.fontSize(4),
  fontWeight: theme.fontWeight.semiBold,
}));

export const StyledVerticalLine = styled(`div`)(({ theme }) => ({
  width: "2px",
  backgroundColor: theme.palette.white,
  margin: `0 ${theme.spacing(10)}`,
}));

export const StyledTimelineBullet = styled(`div`)(({ theme }) => ({
  position: "absolute",
  marginTop: "5px",
  top: 0,
  left: "-48px",
  height: "14px",
  width: "14px",
  borderRadius: "50%",
  backgroundColor: theme.palette.white,
  zIndex: 1,
}));

export const StyledVerticalLineMask = styled(`div`)(({ theme }) => ({
  position: "absolute",
  width: "20px",
  height: "100%",
  backgroundColor: theme.palette.text,
  marginLeft: theme.spacing(8),
  zIndex: 2,
}));
