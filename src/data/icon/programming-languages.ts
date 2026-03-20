import { IconItem } from "@/types/icon";

import javaIcon from "@/assets/icon/programming-languages/java.png";
import pythonIcon from "@/assets/icon/programming-languages/python.png";

const JAVA : IconItem = {
  name: "Java",
  category: "Programming Languages",
  filename: "java.png",
  description: "Object-oriented programming language for enterprise applications",
  tags: ["java", "programming", "language", "enterprise", "oop"],
  hasImage: true,
  imageSrc: javaIcon
}

const PYTHON : IconItem = {
  name: "Python",
  category: "Programming Languages",
  filename: "python.png",
  description: "High-level programming language for backend development",
  tags: ["python", "programming", "language", "scripting", "data"],
  hasImage: true,
  imageSrc: pythonIcon
}

export const PROGRAMMING_LANGUAGES = [
  JAVA,
  PYTHON
];