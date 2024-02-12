import { PortableTextBlock } from "@portabletext/types";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface TripIntroductionProps {
  content: PortableTextBlock;
  image: SanityImageSource;
}
