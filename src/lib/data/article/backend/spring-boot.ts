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
  description: `In the previous article, Set Up Spring Boot Application using Spring Initializr, we covered the setup of a Spring Boot application.
    Now, we will configure the Spring Boot application to integrate with a PostgreSQL database and implement event creation functionality using Spring MVC architecture.`,
  url: `${TOPICS.SPRING_BOOT.url}/develop-spring-boot-application-with-postgresql-and-thymeleaf`,
  publishDate: "April 07, 2025",
  modifiedDate: "April 07, 2025",
  topics: [ TOPICS.SPRING_BOOT ],
  active: true
}

export const USER_REGISTRATION_AND_LOGIN_USING_SPRING_SECURITY: IArticleItem = {
  title: "User Registration and Login using Spring Security",
  description: ``,
  url: `${TOPICS.SPRING_BOOT.url}/user-registration-and-login-using-spring-security`,
  publishDate: "May 27, 2025",
  modifiedDate: "May 27, 2025",
  topics: [ TOPICS.SPRING_BOOT ],
  active: false
}

export const SPRING_BOOT: IArticleItem[] = [
  SPRING_BOOT_APPLICATION_USING_SPRING_INITIALIZR,
  SPRING_BOOT_APPLICATION_WITH_POSTGRESQL_THYMELEAF,
  USER_REGISTRATION_AND_LOGIN_USING_SPRING_SECURITY
].filter(m => m.active);
