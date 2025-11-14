import { IconItem } from "@/types/icon";

import springBootIcon from "@/assets/icon/backend/spring-boot.png";

const SPRING_BOOT : IconItem = {
  name: "Spring Boot",
  category: "Backend Frameworks",
  filename: "spring-boot.png",
  description: "Java-based framework for building enterprise applications",
  tags: ["java", "spring", "backend", "framework"],
  hasImage: true,
  imageSrc: springBootIcon
}

export const BACKEND = [
  SPRING_BOOT
];
