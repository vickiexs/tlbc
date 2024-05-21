import { ImageProps as Image } from "../image/type";

export interface CaptionedImageProps {
  image: Image;
  caption?: string;
  aspectRatio?: number;
}
