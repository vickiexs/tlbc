import Image from "../../atoms/image";
import Typography from "../typography";

import { StyledCaptionedImage } from "./styled";
import { CaptionedImageProps } from "./type";

export default function CaptionedImage({
  image,
  caption,
  aspectRatio,
}: CaptionedImageProps) {
  return (
    <StyledCaptionedImage
      aspectRatio={
        aspectRatio ? aspectRatio : image.asset.metadata.dimensions.aspectRatio
      }
    >
      <Image {...image} />
      {caption && <Typography variation="caption">{caption}</Typography>}
    </StyledCaptionedImage>
  );
}
