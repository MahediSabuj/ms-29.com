import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/lib/data/article/topics";

import {
  SPRING_BOOT_APPLICATION_WITH_POSTGRESQL_THYMELEAF as ARTICLE
} from "@/lib/data/article/backend/spring-boot";

import EVENT_REGISTRATION_SYSTEM_DB_DIAGRAM from "./assets/event-registration-db-diagram.png";

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

export default function SpringBootRestAPI() {
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
            In the previous article, <Link href="/backend/spring-boot/spring-boot-application-using-spring-initializr" className="text-blue-600" target="_blank">Set Up Spring Boot Application using Spring Initializr</Link>, we covered the setup of a Spring Boot application.
            Now, we will configure the Spring Boot application to integrate with a PostgreSQL database and implement functionality to store user profile images in an AWS S3 bucket.
          </section>
          <section className="pt-4">
            By the end, we will develop an <strong>Event Registration System</strong> that allows users to register for an event.
            Also, Admin to create the event and view the registered users.
          </section>
          <h2 className="text-xl mt-4">
            <strong>Database Schema for Event Registration System</strong>
          </h2>
          <section>
            Before we get our hands dirty with development, let&apos;s take a look at the database diagram of the Event
            Registration System. It is a best practice to have a clear understanding of the database schema before starting the development.
            <Image src={EVENT_REGISTRATION_SYSTEM_DB_DIAGRAM} className="border mt-2" width="650"
                alt="Event Registration Database Diagram">
            </Image>
          </section>
        </div>
      </article>
    </div>
  );
}
