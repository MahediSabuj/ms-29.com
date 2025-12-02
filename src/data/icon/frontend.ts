import { IconItem } from "@/types/icon";

import reactIcon from "@/assets/icon/frontend/react.png";
import nextjsIcon from "@/assets/icon/frontend/nextjs.png";
import angularIcon from "@/assets/icon/frontend/angular.png";
import vueIcon from "@/assets/icon/frontend/vue.png";

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

const ANGULAR : IconItem = {
  name: "Angular",
  category: "Frontend Frameworks",
  filename: "angular.png",
  description: "Platform for building web applications",
  tags: ["typescript", "javascript", "frontend", "angular", "framework"],
  hasImage: true,
  imageSrc: angularIcon
}

const VUE : IconItem = {
  name: "Vue.js",
  category: "Frontend Frameworks",
  filename: "vue.png",
  description: "Progressive JavaScript framework for building user interfaces",
  tags: ["javascript", "frontend", "vue", "framework"],
  hasImage: true,
  imageSrc: vueIcon
}

export const FRONTEND = [
  REACT,
  NEXTJS,
  ANGULAR,
  VUE
];
