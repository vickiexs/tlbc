import { ImageProps as Image } from "../../common/image/type";

export interface VideoProps {
  videoUrl: string;
  thumbnail?: Image;
  mobileThumbnail?: Image;
}

export interface VideoOverlayProps {
  videoUrl: string;
  open: boolean;
  handleClose: () => void;
  thumbnail?: Image;
}
