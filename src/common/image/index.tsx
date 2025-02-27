import { baseUrl } from "../../utils/constants";

import { StyledImage } from "./styled";
import { ImageProps } from "./type";

export default function Image({
  asset,
  hotspot,
  height,
  width,
  noPreview = false,
}: ImageProps) {
  return (
    <StyledImage
      id={asset._id}
      baseUrl={baseUrl}
      preview={noPreview ? undefined : asset.metadata.lqip}
      hotspot={hotspot}
      height={height ? height : asset.metadata.dimensions.height}
      width={width ? width : asset.metadata.dimensions.width}
    />
  );
}
