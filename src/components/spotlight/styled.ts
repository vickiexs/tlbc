import styled from "styled-components";

export const SpotlightContainer = styled("div").withConfig({
	shouldForwardProp: (props) => props !== "fixedHeight",
})<{ fixedHeight: boolean }>(({ theme, fixedHeight }) => ({
	height: "100svh",
	width: "100%",
	position: "relative",
	overflow: "hidden",

	[`@media ${theme.breakpoints.md}`]: {
		height: fixedHeight ? "600px" : "100svh",
	},
}));

export const BackgroundImage = styled("div").withConfig({
	shouldForwardProp: (props) => props !== "fixedHeight",
})<{ fixedHeight: boolean }>(({ theme, fixedHeight }) => ({
	height: "100vh",
	width: "100%",
	position: "absolute",
	overflow: "hidden",
	img: {
		height: "100%",
		width: "100%",
		objectFit: "cover",
	},

	[`@media ${theme.breakpoints.md}`]: {
		height: fixedHeight ? "600px" : "100svh",
	},
}));

export const Overlay = styled("div")(({ theme }) => ({
	position: "absolute",
	height: "100%",
	width: "100%",
	backgroundColor: "rgba(0, 0, 0, 0.25)",

	[`@media ${theme.breakpoints.md}`]: {
		backgroundColor: "rgba(0, 0, 0, 0)",
	},
}));

export const GradientOverlay = styled("div")(({ theme }) => ({
	position: "absolute",
	height: "100%",
	width: "100%",
	background:
		"linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.05) 10%, rgba(0, 0, 0, 0) 17%, rgba(0, 0, 0, 0) 100%)",

	[`@media ${theme.breakpoints.md}`]: {
		background:
			"linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0) 100%)",
	},
}));

export const VideoOverlay = styled("div")(() => ({
	position: "absolute",
	height: "100%",
	width: "100%",
	backgroundColor: "rgba(0, 0, 0, 0.5)",
	zIndex: 1,
	pointerEvents: "none",
}));

export const TextOverlay = styled("div").withConfig({
	shouldForwardProp: (props) => props !== "darkText" && props !== "isHomepage",
})<{ darkText: boolean; isHomepage: boolean }>(
	({ theme, darkText, isHomepage }) => ({
		display: "flex",
		flexDirection: "column",
		height: "100%",
		alignItems: "center",
		justifyContent: "center",
		color: darkText ? theme.palette.text : theme.palette.white,
		position: "absolute",
		top: 0,
		zIndex: 3,
		textShadow: `1px 1px 10px rgba(0, 0, 0, 0.1)`,
		pointerEvents: "none",
		padding: `0 ${theme.spacing(15)}`,
		textAlign: "center",
		width: "100%",

		[`@media ${theme.breakpoints.md}`]: {
			padding: isHomepage
				? `0 ${theme.spacing(15)}`
				: `${theme.spacing(10)} ${theme.spacing(7)}`,
			textAlign: isHomepage ? "center" : "left",
			alignItems: isHomepage ? "center" : "flex-start",
			justifyContent: isHomepage ? "center" : "flex-end",
		},
	})
);

export const TextContainer = styled("div").withConfig({
	shouldForwardProp: (props) => props !== "isHomepage",
})<{ isHomepage: boolean }>(({ theme, isHomepage }) => ({
	[`@media ${theme.breakpoints.md}`]: {
		h1: {
			textAlign: isHomepage ? "center" : "left",
		},
	},
	[`@media ${theme.breakpoints.sm}`]: {
		minHeight: isHomepage ? "320px" : "unset",
	},
}));

export const Heading = styled("h1")(({ theme }) => ({
	fontFamily: "Mukta",
	fontSize: theme.fontSize(16),
	fontWeight: 400,
	textTransform: "uppercase",
	textAlign: "center",
	letterSpacing: "0.35rem",
	margin: 0,

	[`@media ${theme.breakpoints.lg}`]: {
		fontSize: theme.fontSize(15),
	},
	[`@media ${theme.breakpoints.md}`]: {
		fontSize: theme.fontSize(12),
		letterSpacing: "0.15rem",
	},
}));

export const Subtitle = styled("div").withConfig({
	shouldForwardProp: (props) => props !== "fixedHeight",
})<{ fixedHeight: boolean }>(({ theme, fixedHeight }) => ({
	fontSize: theme.fontSize(5),
	fontWeight: theme.fontWeight.regular,
	textTransform: "uppercase",
	letterSpacing: "0.1rem",
	marginTop: "-10px",

	[`@media ${theme.breakpoints.md}`]: {
		fontSize: theme.fontSize(4),
		letterSpacing: "0.075rem",
		marginTop: fixedHeight ? "-10px" : "0",
	},
}));

export const BackgroundVideo = styled("video")(() => ({
	width: "100%",
	height: "100svh",
	objectFit: "cover",
}));
