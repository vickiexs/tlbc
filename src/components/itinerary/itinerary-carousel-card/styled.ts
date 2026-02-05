import styled from "styled-components";

const BULLET_SIZE_DESKTOP = "20px";
const BULLET_SIZE_TABLET = "17px";
const BULLET_SIZE_MOBILE = "15px";

export const CarouselCard = styled("div")(({ theme }) => ({
	maxWidth: "450px",
	textAlign: "justify",

	[`@media ${theme.breakpoints.lg}`]: {
		maxWidth: "350px",
	},
	[`@media ${theme.breakpoints.sm}`]: {
		maxWidth: "320px",
	},
	[`@media ${theme.breakpoints.xs}`]: {
		maxWidth: "calc(100vw - 56px)",
	},
}));

export const CardHeading = styled("div")(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	textTransform: "uppercase",
	fontSize: theme.fontSize(5),
	fontWeight: theme.fontWeight.semiBold,

	[`@media ${theme.breakpoints.md}`]: {
		fontSize: theme.fontSize(4),
	},
}));

export const LineContainer = styled("div")(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	position: "relative",
	width: "100%",
	height: BULLET_SIZE_DESKTOP,
	margin: `${theme.spacing(8)} 0`,

	".hr": {
		position: "absolute",
		top: "50%",
		width: "150%",
		margin: 0,
	},

	[`@media ${theme.breakpoints.lg}`]: {
		height: BULLET_SIZE_TABLET,
	},
	[`@media ${theme.breakpoints.md}`]: {
		height: BULLET_SIZE_MOBILE,
	},
}));

export const TimelineBullet = styled("div")(({ theme }) => ({
	position: "absolute",
	top: 0,
	height: BULLET_SIZE_DESKTOP,
	width: BULLET_SIZE_DESKTOP,
	borderRadius: "50%",
	backgroundColor: theme.palette.white,

	[`@media ${theme.breakpoints.lg}`]: {
		height: BULLET_SIZE_TABLET,
		width: BULLET_SIZE_TABLET,
	},
	[`@media ${theme.breakpoints.md}`]: {
		height: BULLET_SIZE_MOBILE,
		width: BULLET_SIZE_MOBILE,
	},
}));
