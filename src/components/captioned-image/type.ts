import { ImageProps as Image } from "../../common/image/type";

export interface CaptionedImageProps {
  image: Image;
  caption?: string;
  aspectRatio?: number;
}
