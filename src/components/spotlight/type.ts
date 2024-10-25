import { ImageProps } from "../../atoms/image/type";

export interface SpotlightProps {
  heading: string;
  subheadings?: string[];
  image: ImageProps;
  mobileImage: ImageProps;
  videoUrl?: string;
  darkText: boolean;
  fixedHeight?: boolean;
}
