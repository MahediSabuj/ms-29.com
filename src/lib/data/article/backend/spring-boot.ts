import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const SPRING_BOOT_APPLICATION_USING_SPRING_INITIALIZR: IArticleItem = {
  title: "Create Spring Boot Application using Spring Initializr",
  description: `Spring Initializr is a web based tool provided by Spring to bootstrap your project. It streamlines the project setup 
    process by generating a pre configured Spring Boot project.`,
  url: `${TOPICS.SPRING_BOOT.url}/spring-boot-application-using-spring-initializr`,
  publishDate: "March 30, 2025",
  modifiedDate: "March 30, 2025",
  topics: [ TOPICS.SPRING_BOOT ],
  active: true
}

export const SPRING_BOOT: IArticleItem[] = [
  SPRING_BOOT_APPLICATION_USING_SPRING_INITIALIZR
].filter(m => m.active);
