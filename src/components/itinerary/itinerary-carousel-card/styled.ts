import styled from "styled-components";

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
	height: "20px",
	margin: `${theme.spacing(8)} 0`,

	".hr": {
		position: "absolute",
		top: "50%",
		width: "150%",
		margin: 0,
	},
}));

export const TimelineBullet = styled("div")(({ theme }) => ({
	position: "absolute",
	top: 0,
	height: "20px",
	width: "20px",
	borderRadius: "50%",
	backgroundColor: theme.palette.white,
}));
