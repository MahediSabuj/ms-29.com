import { IconItem } from "@/types/icon";

import reactIcon from "@/assets/icon/frontend/react.png";
import nextjsIcon from "@/assets/icon/frontend/nextjs.png";

const REACT : IconItem = {
  name: "React",
  category: "Frontend Frameworks",
  filename: "react.png",
  description: "JavaScript library for building user interfaces",
  tags: ["javascript", "frontend", "react", "library"],
  hasImage: true,
  imageSrc: reactIcon
}

const NEXTJS : IconItem = {
  name: "Next.js",
  category: "Frontend Frameworks",
  filename: "nextjs.png",
  description: "React framework for production",
  tags: ["javascript", "react", "framework", "nextjs"],
  hasImage: true,
  imageSrc: nextjsIcon
}

export const FRONTEND = [
  REACT,
  NEXTJS
];
