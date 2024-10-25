import { ImageProps as Image } from "../../../atoms/image/type";

export interface VideoOverlayProps {
  videoUrl: string;
  open: boolean;
  handleClose: () => void;
  thumbnail?: Image;
}
