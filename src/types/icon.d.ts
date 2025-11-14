export interface IconItem {
  name: string;
  category: string;
  filename: string;
  description?: string;
  tags: string[];
  hasImage?: boolean;
  imageSrc?: StaticImageData;
}
