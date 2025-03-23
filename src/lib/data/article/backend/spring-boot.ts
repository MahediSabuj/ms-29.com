import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const SPRING_BOOT_APPLICATION_USING_SPRING_INITIALIZR: IArticleItem = {
  title: "Create Spring Boot Application using Spring Initializr",
  description: ``,
  url: `${TOPICS.SPRING_BOOT.url}/spring-boot-application-using-spring-initializr`,
  publishDate: "April 20, 2025",
  modifiedDate: "April 20, 2025",
  topics: [ TOPICS.SPRING_BOOT ],
  active: true
}

export const SPRING_BOOT: IArticleItem[] = [
  SPRING_BOOT_APPLICATION_USING_SPRING_INITIALIZR
].filter(m => m.active);
