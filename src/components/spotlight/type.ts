import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface SpotlightProps {
  heading: string;
  subheadings: string[];
  image: SanityImageSource;
  darkText: boolean;
}
