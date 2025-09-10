import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/lib/data/article/topics";
import ArticleReviewForm from "@/components/form/article-review/article-review";
import ArticleReviewList from "@/components/article-review-list/article-review-list";

import {
  SPRING_BOOT_APPLICATION_USING_SPRING_INITIALIZR as ARTICLE
} from "@/lib/data/article/backend/spring-boot";

import SPRING_BOO_PROJECT_CONFIGURATION from "./assets/spring-boot-project-configuration.png";
import SPRING_BOO_PROJECT_DEPENDENCIES from "./assets/spring-boot-project-dependencies.png";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: TOPICS.SPRING_BOOT.title,
    url: TOPICS.SPRING_BOOT.url
  }],
  current: ARTICLE.title
}

export default function SpringBootApplication() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <article itemScope itemType="https://schema.org/Article">
        <Article
          title={ARTICLE.title}
          publishDate={ARTICLE.publishDate}
          modifiedDate={ARTICLE.modifiedDate}/>
        <div>
          <section className="pt-6">
            <Link href="https://start.spring.io" target="_blank" className="text-blue-600">Spring Initializr</Link> is a web-based tool that simplifies
            the setup of Spring Boot projects by generating pre-configured templates with necessary dependencies. It provides a quick and efficient way to
            start a new Spring Boot application. Spring Boot itself is a powerful framework built on the Spring Framework, designed for creating stand-alone,
            production-ready applications with minimal configuration.
          </section>
          <section className="pt-4">
            To create a Spring Boot application, you can either start from the Spring Initializr website or select &quot;New Project with Spring Boot&quot; in IntelliJ IDEA.
            Configure your project by selecting the required options:
            <ul className="list-disc ml-6 pt-1 pl-2.5">
              <li><strong>Project Type:</strong> Choose Maven or Gradle based on your preference.</li>
              <li><strong>Language:</strong> Select Java (you can also choose Kotlin or Groovy if needed).</li>
              <li><strong>Spring Boot Version:</strong> Choose the latest stable version. For IntelliJ IDEA, it will automatically select the latest version.</li>
              <li><strong>Project Metadata:</strong>
                <ul className="list-disc ml-6 pt-1 pl-2.5">
                  <li><strong>Group:</strong> Group ID for your project, usually in reverse domain format (e.g., com.ms29).</li>
                  <li><strong>Artifact:</strong> Artifact ID for your project (e.g., event-registration).</li>
                  <li><strong>Name:</strong> Name of your project (e.g., Event Registration).</li>
                  <li><strong>Description:</strong> Description of your project.</li>
                  <li><strong>Package Name:</strong> Package name for your project (e.g., com.ms29.event.registration).</li>
                  <li><strong>Java:</strong> Choose the Java version (e.g., 21).</li>
                </ul>
              </li>
            </ul>
          </section>
          <Image src={SPRING_BOO_PROJECT_CONFIGURATION} className="border my-2" width="650"
              alt="Spring Boot Project Configuration">
          </Image>
          <section className="pt-2">
            Once you have configured your project, add the necessary dependencies such as:
            <ul className="list-disc ml-6 pt-1 pl-2.5">
              <li><strong>Spring Web</strong> for building web applications.</li>
              <li><strong>PostgreSQL Driver</strong> for PostgreSQL database. You can choose other databases like MySQL or H2 based on your requirements.</li>
              <li><strong>Spring Data JPA</strong> for database interaction.</li>
              <li><strong>Spring Security</strong> for authentication and authorization.</li>
              <li><strong>Spring Actuator</strong> to monitor and manage application health and performance.</li>
              <li><strong>Spring Boot DevTools</strong> for faster development.</li>
              <li><strong>Lombok</strong> to reduce boilerplate code (such as getters, setters, constructors, etc.).</li>
              <li><strong>Validation</strong> to apply validation constraints on your models.</li>
              <li><strong>Thymeleaf</strong> templating engine for rendering HTML pages.</li>
            </ul>
          </section>
          <Image src={SPRING_BOO_PROJECT_DEPENDENCIES} className="border my-2" width="650"
              alt="Spring Boot Project Dependencies">
          </Image>
          <section className="pt-2">
            After adding the dependencies, click on the &quot;Generate&quot; button to download the project zip file. Extract the zip file and open the project in your favorite IDE.
            For IntelliJ IDEA, project will be set up on your local machine. You can start building your Spring Boot application by creating controllers, services, and repositories.
          </section>
          <section className="pt-4">
            We will discuss how to configure the Spring Boot application, and interact with the database in the upcoming articles. Please keep an eye on the website for more updates.
          </section>
        </div>
      </article>
      <div className="mt-8 mb-4">
        <ArticleReviewList items={[]}/>
        <ArticleReviewForm/>
      </div>
    </div>
  );
}
