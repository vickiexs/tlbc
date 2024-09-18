import { ImageProps } from "../image/type";

export interface SpotlightProps {
  heading: string;
  subheadings?: string[];
  image: ImageProps;
  videoUrl?: string;
  darkText: boolean;
}
