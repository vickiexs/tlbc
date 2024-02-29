export interface ImageProps {
  _type: string;
  asset: {
    _id: string;
    metadata: ImageMetadata;
  };
  crop: {
    bottom: number;
    left: number;
    right: number;
    top: number;
    _type: string;
  };
  hotspot: {
    height: number;
    width: number;
    x: number;
    y: number;
    _type: string;
  };
}

export interface ImageMetadata {
  lqip: string;
  dimensions: {
    aspectRatio: number;
    height: number;
    width: number;
  };
}
