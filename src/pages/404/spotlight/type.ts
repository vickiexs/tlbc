import { ImageProps as Image } from "../../../atoms/image/type";
import { LinkProps as Link } from "../../../atoms/link/type";

export interface SpotlightProps {
  heading: string;
  subheadings: string[];
  image: Image;
  darkText: boolean;
  link?: Link;
}
