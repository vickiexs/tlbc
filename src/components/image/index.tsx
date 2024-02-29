import { baseUrl } from "../../utils/constants";

import { StyledImage } from "./styled";
import { ImageProps } from "./type";

export default function Image({ asset, hotspot }: ImageProps) {
  return (
    <StyledImage
      id={asset._id}
      baseUrl={baseUrl}
      preview={asset.metadata.lqip}
      hotspot={hotspot}
    />
  );
}
