import { useState } from "react";
import { useTheme } from "styled-components";
import { useMediaQuery } from "@uidotdev/usehooks";
import { PortableText } from "@portabletext/react";

import Typography from "../../../components/typography";
import HeadedContentBlock from "../../../components/headed-content-block";
import Image from "../../../common/image";
import Carousel from "../../../components/carousel";
import AccordionItem from "../../../components/accordion-item";

import * as S from "./styled";
import { FacilitiesProps } from "./type";

export default function Facilities({
	description,
	floorplans,
	facilitiesLeftCol,
	facilitiesRightCol,
	imageCarousel,
}: FacilitiesProps) {
	const [activeItem, setActiveItem] = useState(-1);

	const theme = useTheme();

	const isBreakpointMd = useMediaQuery(theme.breakpoints.md);
	const isBreakpointSm = useMediaQuery(theme.breakpoints.sm);

	return (
		<S.Facilities>
			<Typography variation="body">
				<PortableText value={description} />
			</Typography>
			<S.Floorplans>
				{floorplans.map((floorplan, index) => (
					<S.FloorplanContainer key={index}>
						<Image {...floorplan} />
					</S.FloorplanContainer>
				))}
			</S.Floorplans>
			{isBreakpointMd ? (
				<S.MobileFacilitiesText>
					{facilitiesLeftCol.concat(facilitiesRightCol).map((item, index) => (
						<AccordionItem
							key={index}
							header={item.heading}
							content={item.content}
							index={index}
							activeItem={activeItem}
							setActiveItem={setActiveItem}
						/>
					))}
				</S.MobileFacilitiesText>
			) : (
				<S.FacilitiesText>
					<S.Column>
						{facilitiesLeftCol.map((item, index) => (
							<HeadedContentBlock {...item} key={index} />
						))}
					</S.Column>
					<S.Column>
						{facilitiesRightCol.map((item, index) => (
							<HeadedContentBlock {...item} key={index} />
						))}
					</S.Column>
				</S.FacilitiesText>
			)}
			<div>
				<Carousel
					centeredSlides={isBreakpointSm ? true : false}
					centeredSlidesBounds={isBreakpointSm ? true : false}
				>
					{imageCarousel.map((img, index) => (
						<S.CarouselImage
							key={index}
							aspectRatio={img.asset.metadata.dimensions.aspectRatio}
						>
							<Image {...img} />
						</S.CarouselImage>
					))}
				</Carousel>
			</div>
		</S.Facilities>
	);
}
