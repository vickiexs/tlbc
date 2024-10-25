import { ImageProps as Image } from "../../atoms/image/type";

export interface CaptionedImageProps {
  image: Image;
  caption?: string;
  aspectRatio?: number;
}
