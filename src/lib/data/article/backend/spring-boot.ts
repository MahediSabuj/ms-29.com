import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const SPRING_BOOT_APPLICATION_USING_SPRING_INITIALIZR: IArticleItem = {
  title: "Create Spring Boot Application using Spring Initializr",
  description: `Spring Initializr is a web-based tool that simplifies the setup of Spring Boot projects by generating pre-configured 
    templates with necessary dependencies. It provides a quick and efficient way to start a new Spring Boot application. Spring Boot 
    itself is a powerful framework built on the Spring Framework, designed for creating stand-alone, production-ready applications with minimal configuration.`,
  url: `${TOPICS.SPRING_BOOT.url}/spring-boot-application-using-spring-initializr`,
  publishDate: "March 30, 2025",
  modifiedDate: "March 30, 2025",
  topics: [ TOPICS.SPRING_BOOT ],
  active: true
}

export const SPRING_BOOT_APPLICATION_WITH_POSTGRESQL_THYMELEAF: IArticleItem = {
  title: "Develop Spring Boot Application with PostgreSQL and Thymeleaf",
  description: ``,
  url: `${TOPICS.SPRING_BOOT.url}/develop-spring-boot-application-with-postgresql-and-thymeleaf`,
  publishDate: "April 17, 2025",
  modifiedDate: "April 17, 2025",
  topics: [ TOPICS.SPRING_BOOT ],
  active: false
}

export const SPRING_BOOT: IArticleItem[] = [
  SPRING_BOOT_APPLICATION_USING_SPRING_INITIALIZR,
  SPRING_BOOT_APPLICATION_WITH_POSTGRESQL_THYMELEAF
].filter(m => m.active);
