import { IconItem } from "@/types/icon";

import springBootIcon from "@/assets/icon/backend/spring-boot.png";
import nestjsIcon from "@/assets/icon/backend/nestjs.png";
import pythonIcon from "@/assets/icon/backend/python.png";

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

const PYTHON : IconItem = {
  name: "Python",
  category: "Backend Frameworks",
  filename: "python.png",
  description: "High-level programming language for backend development",
  tags: ["python", "programming", "backend", "language"],
  hasImage: true,
  imageSrc: pythonIcon
}

export const BACKEND = [
  SPRING_BOOT,
  NESTJS,
  PYTHON
];
