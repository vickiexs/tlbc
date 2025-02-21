import { ImageProps as Image } from "../../../common/image/type";
import { LinkProps as Link } from "../../../common/link/type";

export interface SpotlightProps {
  heading: string;
  subheadings: string[];
  image: Image;
  darkText: boolean;
  link?: Link;
}
