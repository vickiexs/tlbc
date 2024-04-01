import { ImageProps as Image } from "../../../components/image/type";
import { LinkProps as Link } from "../../../components/link/type";

export interface SpotlightProps {
  heading: string;
  subheadings: string[];
  image: Image;
  darkText: boolean;
  link?: Link;
}
