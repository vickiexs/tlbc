import styled from "styled-components";

export const StyledContainer = styled(`div`).withConfig({
  shouldForwardProp: (props) => props !== "isLeftImage",
})<{ isLeftImage: boolean }>(({ theme, isLeftImage }) => ({
  display: "flex",
  gap: theme.spacing(20),
  justifyContent: isLeftImage ? "flex-start" : "space-between",
  width: "100%",
  marginBottom: theme.spacing(10),

  [`@media ${theme.breakpoints.xl}`]: {
    gap: theme.spacing(15),
    marginBottom: theme.spacing(5),
  },
  [`@media ${theme.breakpoints.lg}`]: {
    gap: theme.spacing(12),
    marginBottom: 0,
  },
  [`@media ${theme.breakpoints.md}`]: {
    flexDirection: "column",
    gap: theme.spacing(5),
    marginBottom: theme.spacing(2),
  },
}));

export const StyledName = styled("div")(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  alignItems: "center",
  fontSize: theme.fontSize(8),
  fontWeight: theme.fontWeight.semiBold,
  color: "inherit",
  textTransform: "uppercase",
  margin: 0,

  a: {
    marginTop: "2px",
    [`@media ${theme.breakpoints.xs}`]: {
      marginTop: 0,
    },
  },
  "a:hover": {
    svg: {
      fill: theme.palette.primary.main,
    },
  },

  [`@media ${theme.breakpoints.lg}`]: {
    fontSize: theme.fontSize(6),
  },
  [`@media ${theme.breakpoints.md}`]: {
    fontSize: theme.fontSize(5),
  },
}));

export const StyledRole = styled("div")(({ theme }) => ({
  fontSize: theme.fontSize(4),
  fontWeight: theme.fontWeight.semiBold,
  color: "inherit",
  textTransform: "uppercase",
  margin: 0,

  [`@media ${theme.breakpoints.md}`]: {
    fontSize: theme.fontSize(3),
  },
}));

export const StyledImageContainer = styled(`div`)(({ theme }) => ({
  maxWidth: "750px",
  aspectRatio: "16/9",
  minWidth: "200px",

  [`@media ${theme.breakpoints.xl}`]: {
    maxWidth: "600px",
  },
  [`@media ${theme.breakpoints.lg}`]: {
    maxWidth: "400px",
  },
  [`@media ${theme.breakpoints.md}`]: {
    maxWidth: "100%",
    aspectRatio: "6/4",
  },
}));

export const StyledInfoContainer = styled(`div`)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(5),
  width: "100%",
  textAlign: "justify",

  button: {
    alignSelf: "flex-start",
    marginTop: theme.spacing(4),
    [`@media ${theme.breakpoints.sm}`]: {
      marginTop: theme.spacing(2),
    },
  },

  [`@media ${theme.breakpoints.lg}`]: {
    gap: theme.spacing(3),
  },
}));

export const StyledModalContent = styled(`div`)(({ theme }) => ({
  position: "relative",
  maxWidth: "1512px",
  maxHeight: "90vh",

  [`@media ${theme.breakpoints.xxl}`]: {
    maxWidth: "80vw",
  },
  [`@media ${theme.breakpoints.lg}`]: {
    gap: theme.spacing(3),
  },
  [`@media ${theme.breakpoints.md}`]: {
    maxWidth: "unset",
    maxHeight: "unset",
    height: "100vh",
    width: "100vw",
  },
}));

export const StyledModalImageContainer = styled(`div`)(({ theme }) => ({
  maxHeight: "650px",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",

  [`@media ${theme.breakpoints.md}`]: {
    maxHeight: "450px",
  },
}));

export const StyledModalTextContainer = styled(`div`)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(5),
  padding: theme.spacing(14),
  textAlign: "justify",

  "p strong": {
    fontWeight: theme.fontWeight.semiBold,
  },
  "p em": {
    fontSize: theme.fontSize(8),
    fontWeight: theme.fontWeight.regular,

    [`@media ${theme.breakpoints.md}`]: {
      fontSize: theme.fontSize(6),
    },
  },

  [`@media ${theme.breakpoints.lg}`]: {
    padding: theme.spacing(10),
  },
  [`@media ${theme.breakpoints.md}`]: {
    gap: theme.spacing(4),
  },
  [`@media ${theme.breakpoints.sm}`]: {
    padding: theme.spacing(7),
  },
}));

export const StyledCloseButton = styled(`button`)(({ theme }) => ({
  position: "absolute",
  right: 0,
  color: theme.palette.white,
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  backdropFilter: "blur(4px)",
  WebkitBackdropFilter: "blur(4px)",
  borderRadius: "50%",
  border: "none",
  height: "40px",
  width: "40px",
  padding: 0,
  marginTop: theme.spacing(4),
  marginRight: theme.spacing(4),
  transition: "all 250ms",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  svg: {
    marginTop: theme.spacing(1),
  },

  [`@media ${theme.breakpoints.md}`]: {
    height: "35px",
    width: "35px",
    position: "fixed",
  },
}));
