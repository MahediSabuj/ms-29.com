import { Metadata } from "next";
import Link from "next/link";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/lib/data/article/topics";

import {
  SPRING_BOOT_APPLICATION_USING_SPRING_INITIALIZR as ARTICLE
} from "@/lib/data/article/backend/spring-boot";

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
        </div>  
      </article>
    </div>
  );
}
