import { Metadata } from "next";
import Link from "next/link";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/lib/data/article/topics";

import { SETUP_CI_CD_PIPELINE_TO_DEPLOY_SPRING_BOOT_APP_TO_AWS_ECS as ARTICLE } from "@/lib/data/article/aws/ecs";
import HighlightCode from "@/components/highlight/highlight";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const application_yml =
`server:
  port: 8080

spring:
  application:
    name: ms29-event
  datasource:
    url: jdbc:postgresql://localhost:5432/ms29-event
    username: postgres
    password: postgres
    driver-class-name: org.postgresql.Driver
  jpa:
    show-sql: true`;

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: TOPICS.AWS_ECS.title,
    url: TOPICS.AWS_ECS.url
  }],
  current: ARTICLE.title
}

export default function SetupCICDPipeline() {
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
            In today&apos;s fast-paced software development environment, Continuous Integration and Continuous Deployment (CI/CD)
            pipelines have become essential tools. These pipelines streamline the development process, automate testing, and expedite
            application deployment, making it faster, more reliable, and less error-prone.
          </section>
          <section className="pt-4">
            In this article, we will walk through setting up a complete CI/CD pipeline for deploying a Spring Boot application to AWS ECS.
            Consider a Spring Boot application which serves as Event Registration System that allows users to register for events, upload
            their images, and store them in an AWS S3 bucket. It also uses AWS RDS for PostgreSQL as the database and Thymeleaf for rendering the frontend.
          </section>
          <section className="pt-4">
            We will cover the following topics in this article:
            <ul className="list-disc ml-6 pt-1 pl-2.5">
              <li><strong>Creating a Spring Boot Application</strong> using <Link href="https://start.spring.io" target="_blank" className="text-blue-600">Spring Initializr</Link>.</li>
              <li><strong>Provisioning AWS Resources</strong> (S3, RDS, ECR, and ECS) with Terraform.</li>
              <li><strong>Containerizing the Application</strong> with Docker.</li>
              <li><strong>Setting Up a GitHub Actions CI/CD Pipeline</strong> for automation.</li>
              <li><strong>Integrating Code Coverage</strong> with Codecov</li>
              <li><strong>Deploying the Application</strong> to AWS ECS</li>
            </ul>
            <div className="pt-2">
              By the end of this tutorial, you will have a fully automated pipeline that builds, tests, and deploy Spring Boot application to AWS ECS.
            </div>
          </section>
          <h2 className="text-xl mt-4">
            <strong>Creating a Spring Boot Application using Spring Initializr</strong>
          </h2>
          <section>
            For the sake of brevity, we won&apos;t dive deeply into the development of the Spring Boot application. Assume you have a Spring Boot application
            with a configuration similar to the following <code className="code-inline">application.yml</code> example:
            <HighlightCode code={application_yml} language="yaml" path="application.yml"/>
            <div className="pt-2">
              If you haven&apos;t develop Spring Boot application yet, you can check this article on <Link href="/backend/spring-boot/spring-boot-application-using-spring-initializr" className="text-blue-600">Creating Spring Boot Application using Spring Initializr</Link>.
            </div>
          </section>
          <h2 className="text-xl mt-4">
            <strong>Provisioning AWS Resources with Terraform</strong>
          </h2>
        </div>
      </article>
    </div>
  );
}
