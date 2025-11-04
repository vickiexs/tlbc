import Image from "../../common/image";
import Typography from "../typography";

import * as S from "./styled";
import { CaptionedImageProps } from "./type";

export default function CaptionedImage({
  image,
  caption,
  aspectRatio,
}: CaptionedImageProps) {
  return (
    <S.CaptionedImage
      aspectRatio={
        aspectRatio ? aspectRatio : image.asset.metadata.dimensions.aspectRatio
      }
    >
      <Image {...image} />
      {caption && <Typography variation="caption">{caption}</Typography>}
    </S.CaptionedImage>
  );
}
