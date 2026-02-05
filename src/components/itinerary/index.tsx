import { useTheme } from "styled-components";
import { useMediaQuery } from "usehooks-ts";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { PortableText } from "@portabletext/react";

import Typography from "../typography";
import ItineraryCarouselCard from "./itinerary-carousel-card";
import Hr from "../../common/horizontal-rule";
import ArrowIcon from "../../common/icons/arrow";
import CaptionedImage from "../captioned-image";

import * as S from "./styled";
import { ItineraryProps } from "./type";

export default function Itinerary({
	description,
	timeline,
	additionalImages,
}: ItineraryProps) {
	const theme = useTheme();
	const isBreakpointLg = useMediaQuery(theme.breakpoints.lg);
	const isBreakpointMd = useMediaQuery(theme.breakpoints.md);
	const isBreakpointSm = useMediaQuery(theme.breakpoints.sm);

	return (
		<S.ItineraryContainer>
			<Typography variation="body" className="description">
				<PortableText value={description} />
			</Typography>
			<Swiper
				slidesPerView="auto"
				spaceBetween={isBreakpointMd ? 40 : isBreakpointLg ? 60 : 80}
				modules={[Navigation]}
				navigation={{
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				}}
				centeredSlides={isBreakpointSm ? true : false}
				centeredSlidesBounds={isBreakpointSm ? true : false}
			>
				{timeline.map((timelineItem, index) => (
					<SwiperSlide key={index}>
						<ItineraryCarouselCard {...timelineItem} />
					</SwiperSlide>
				))}
				<S.ButtonContainer>
					<div className="swiper-button-next">
						<ArrowIcon />
					</div>
					<div className="swiper-button-prev">
						<ArrowIcon />
					</div>
					<Hr color={theme.palette.white} />
				</S.ButtonContainer>
			</Swiper>
			{additionalImages && (
				<S.ImageContainer>
					{additionalImages.map((image, index) => (
						<CaptionedImage
							image={image.image}
							caption={image.caption}
							aspectRatio={182 / 109}
							key={index}
						/>
					))}
				</S.ImageContainer>
			)}
		</S.ItineraryContainer>
	);
}
