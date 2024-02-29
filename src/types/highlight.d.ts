import { Image } from "@/types/image";

export interface Highlight {
  code: string;
  language: string;
  path: string;
  image?: Image;
}
