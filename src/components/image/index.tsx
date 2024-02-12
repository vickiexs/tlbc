import { StyledImage } from "./styled";
import { ImageProps } from "./type";

export default function Image({ src }: ImageProps) {
  return <StyledImage src={src} />;
}
