import { PortableText } from "@portabletext/react";

import Typography from "../../../../components/typography";
import HeadedContentBlock from "../../../../components/headed-content-block";
import Image from "../../../../components/image";
import Carousel from "../../../../components/carousel";

import {
  StyledFacilities,
  StyledFloorplans,
  StyledFloorplanContainer,
  StyledFacilitiesText,
  StyledColumn,
  StyledCarouselImage,
} from "./styled";
import { FacilitiesProps } from "./type";

export default function Facilities({
  description,
  floorplans,
  facilitiesLeftCol,
  facilitiesRightCol,
  imageCarousel,
}: FacilitiesProps) {
  return (
    <StyledFacilities>
      <Typography variation="body">
        <PortableText value={description} />
      </Typography>
      <StyledFloorplans>
        {floorplans.map((floorplan, index) => (
          <StyledFloorplanContainer key={index}>
            <Image {...floorplan} />
          </StyledFloorplanContainer>
        ))}
      </StyledFloorplans>
      <StyledFacilitiesText>
        <StyledColumn>
          {facilitiesLeftCol.map((item, index) => (
            <HeadedContentBlock {...item} key={index} />
          ))}
        </StyledColumn>
        <StyledColumn>
          {facilitiesRightCol.map((item, index) => (
            <HeadedContentBlock {...item} key={index} />
          ))}
        </StyledColumn>
      </StyledFacilitiesText>
      <div>
        <Carousel loop centeredSlides>
          {imageCarousel.map((img, index) => (
            <StyledCarouselImage
              key={index}
              aspectRatio={img.asset.metadata.dimensions.aspectRatio}
            >
              <Image {...img} />
            </StyledCarouselImage>
          ))}
        </Carousel>
      </div>
    </StyledFacilities>
  );
}
