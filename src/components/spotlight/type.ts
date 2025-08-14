import { ImageProps } from "../../common/image/type";

export interface SpotlightProps {
  heading: string;
  subheadings?: string[];
  image: ImageProps;
  mobileImage: ImageProps;
  darkText: boolean;
  fixedHeight?: boolean;
  video?: string;
  videoWebOptimised?: string;
}
