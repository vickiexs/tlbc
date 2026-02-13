import styled from "styled-components";

export const Facilities = styled("div")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(8),
	".carousel-container": {
		margin: `${theme.spacing(10)} 0`,

		[`@media ${theme.breakpoints.md}`]: {
			margin: `0 0 ${theme.spacing(5)} 0`,
		},
	},
}));

export const Floorplans = styled("div")(({ theme }) => ({
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

export const FloorplanContainer = styled("div")(() => ({
	height: "inherit",
	width: "100%",
}));

export const FacilitiesText = styled("div")(({ theme }) => ({
	display: "flex",
	gap: theme.spacing(10),

	[`@media ${theme.breakpoints.sm}`]: {
		flexDirection: "column",
		gap: theme.spacing(5),
	},
}));

export const Column = styled("div")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(6),
	width: "100%",

	[`@media ${theme.breakpoints.sm}`]: {
		gap: theme.spacing(5),
	},
}));

export const MobileFacilitiesText = styled("div")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(1),
}));

export const CarouselImage = styled("div").withConfig({
	shouldForwardProp: (props) => props !== "aspectRatio",
})<{ aspectRatio: number }>(({ theme, aspectRatio }) => ({
	height: "40vh",
	width: "auto",
	aspectRatio: `${aspectRatio}`,

	[`@media ${theme.breakpoints.md}`]: {
		height: "25vh",
	},
}));
