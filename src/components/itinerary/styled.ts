import styled from "styled-components";

export const ItineraryContainer = styled("div")(({ theme }) => ({
	".description": {
		textAlign: "justify",
	},
	".swiper": {
		width: "100%",
		height: "100%",
		overflow: "visible",
		marginTop: theme.spacing(20),
	},
	".swiper-wrapper": {
		height: "100%",
	},
	".swiper-slide": {
		width: "auto",
		height: "auto",
	},

	".swiper-slide:first-child": {
		".hr": {
			width: "101%",
		},
	},
	".swiper-slide:last-child": {
		".hr": {
			width: "100%",
		},
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
			fill: theme.palette.white,
		},
		"&:hover": {
			backgroundColor: "rgba(0, 0, 0, 0.3)",
		},
		[`@media ${theme.breakpoints.xxl}`]: {
			right: "43%",
		},
		[`@media ${theme.breakpoints.lg}`]: {
			right: "40%",
		},
		[`@media ${theme.breakpoints.sm}`]: {
			right: "20%",
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
			fill: theme.palette.white,
		},
		"&:hover": {
			backgroundColor: "rgba(0, 0, 0, 0.3)",
		},
		[`@media ${theme.breakpoints.xxl}`]: {
			left: "43%",
		},
		[`@media ${theme.breakpoints.lg}`]: {
			left: "40%",
		},
		[`@media ${theme.breakpoints.sm}`]: {
			left: "20%",
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

	".vertical-itinerary": {
		margin: `${theme.spacing(10)} 0`,
	},
}));

export const ButtonContainer = styled("div")(({ theme }) => ({
	marginTop: theme.spacing(20),

	".hr": {
		width: "4vw",
		margin: "auto",
		opacity: 0.35,

		[`@media ${theme.breakpoints.xxl}`]: {
			width: "5vw",
		},
		[`@media ${theme.breakpoints.sm}`]: {
			width: "25vw",
		},
		[`@media ${theme.breakpoints.xs}`]: {
			width: "20vw",
		},
	},

	[`@media ${theme.breakpoints.md}`]: {
		marginBottom: theme.spacing(10),
	},
}));

export const ImageContainer = styled("div")(({ theme }) => ({
	display: "flex",
	gap: theme.spacing(10),
	marginTop: theme.spacing(25),

	[`@media ${theme.breakpoints.md}`]: {
		flexDirection: "column",
		gap: theme.spacing(15),
		marginTop: theme.spacing(20),

		"figure:last-child": {
			marginBottom: theme.spacing(3),
			aspectRatio: "unset",
		},
	},
	[`@media ${theme.breakpoints.sm}`]: {
		marginTop: theme.spacing(15),
	},
	[`@media ${theme.breakpoints.xs}`]: {
		gap: theme.spacing(12),
	},
}));
