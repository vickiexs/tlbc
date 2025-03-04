import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";

const builder = imageUrlBuilder(client);

export function getImgUrl(source: SanityImageSource) {
  return builder.image(source);
}
