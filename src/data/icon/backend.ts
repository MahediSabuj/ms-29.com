import { IconItem } from "@/types/icon";

import springBootIcon from "@/assets/icon/backend/spring-boot.png";
import nestjsIcon from "@/assets/icon/backend/nestjs.png";
import djangoIcon from "@/assets/icon/backend/django.png";
import nodejsIcon from "@/assets/icon/backend/nodejs.png";

const SPRING_BOOT : IconItem = {
  name: "Spring Boot",
  category: "Backend Frameworks",
  filename: "spring-boot.png",
  description: "Java-based framework for building enterprise applications",
  tags: ["java", "spring", "backend", "framework"],
  hasImage: true,
  imageSrc: springBootIcon
}

const NESTJS : IconItem = {
  name: "NestJS",
  category: "Backend Frameworks",
  filename: "nestjs.png",
  description: "Progressive Node.js framework for building scalable server-side applications",
  tags: ["nodejs", "typescript", "nestjs", "backend", "framework"],
  hasImage: true,
  imageSrc: nestjsIcon
}

const DJANGO : IconItem = {
  name: "Django",
  category: "Backend Frameworks",
  filename: "django.png",
  description: "Python web framework for rapid development",
  tags: ["django", "python", "web", "framework", "backend"],
  hasImage: true,
  imageSrc: djangoIcon
}

const NODEJS : IconItem = {
  name: "Node.js",
  category: "Backend Frameworks",
  filename: "nodejs.png",
  description: "JavaScript runtime for server-side development",
  tags: ["nodejs", "javascript", "runtime", "backend", "server"],
  hasImage: true,
  imageSrc: nodejsIcon
}

export const BACKEND = [
  DJANGO,
  NESTJS,
  NODEJS,
  SPRING_BOOT
];
