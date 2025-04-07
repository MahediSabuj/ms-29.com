import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/lib/data/article/topics";
import HighlightCode from "@/components/highlight/highlight";
import ArticleReviewList from "@/components/article-review-list/article-review-list";
import ArticleReviewForm from "@/components/form/article-review/article-review";

import {
  SPRING_BOOT_APPLICATION_WITH_POSTGRESQL_THYMELEAF as ARTICLE
} from "@/lib/data/article/backend/spring-boot";

import EVENT_REGISTRATION_SYSTEM_DB_DIAGRAM from "./assets/event-registration-db-diagram.png";
import EVENT_CREATE_POSTMAN from "./assets/event-create-postman.png";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const USER_ROLE_TABLE =
`CREATE TABLE IF NOT EXISTS user_roles (
  id SERIAL PRIMARY KEY,
  user_role_name VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100),
  email_address VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL,
  profile_image VARCHAR(100),
  user_role_id INT NOT NULL REFERENCES user_roles(id)
);

CREATE TABLE IF NOT EXISTS events (
  id SERIAL PRIMARY KEY,
  event_name VARCHAR(100) NOT NULL,
  event_description VARCHAR(500),
  event_location VARCHAR(100) NOT NULL,
  event_start_datetime TIMESTAMP NOT NULL,
  event_end_datetime TIMESTAMP NOT NULL,
  registration_start_datetime TIMESTAMP NOT NULL,
  registration_end_datetime TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS event_participants (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(id),
  event_id INT NOT NULL REFERENCES events(id),
  UNIQUE (user_id, event_id)
);`

const POSTGRESQL_DOCKER_COMPOSE =
`services:
  postgres:
    image: postgres:14.7
    container_name: postgres
    ports:
      - "5432:5432"
    environment:
      POSTGRES_DB: "event_registration"
      POSTGRES_USER: "postgres"
      POSTGRES_PASSWORD: "postgres"`;

const POSTGRESQL_APPLICATION_CONFIG =
`server:
  port: 8080

spring:
  application:
    name: event-registration
  datasource:
    url: jdbc:postgresql://localhost:5432/event_registration
    username: postgres
    password: postgres
  jpa:
    show-sql: true
  sql:
    init:
      mode: always`;

const EVENT_ENTITY =
`@Entity
@Table(name = "events")
@Getter @Setter
public class Event {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  private String eventName;

  private String eventDescription;

  private String eventLocation;

  private LocalDateTime eventStartDatetime;

  private LocalDateTime eventEndDatetime;

  private LocalDateTime registrationStartDatetime;

  private LocalDateTime registrationEndDatetime;
}`;

const EVENT_REPOSITORY =
`@Repository
public interface EventRepository extends JpaRepository<Event, Integer> {
}`;

const EVENT_SERVICE =
`@Service
@AllArgsConstructor
public class EventService {
  private final EventRepository eventRepository;
  
  public Event createEvent(Event event) {
    return eventRepository.save(event);
  }
}`;

const EVENT_CONTROLLER =
`@Controller
@RequestMapping("/event")
@AllArgsConstructor
public class EventController {
  private final EventService eventService;
  
  @GetMapping("/create")
  public String showCreateEventForm(Model model) {
    model.addAttribute("event", new Event());
    return "event/create";
  }
  
  @PostMapping("/create")
  public String createEvent(@ModelAttribute Event event) {
    eventService.createEvent(event);
    return "redirect:/event/list";
  }
  
  @GetMapping("/list")
  public String listEvents(Model model) {
    model.addAttribute("events", eventService.getAllEvents());
    return "event/list";
  }
}`;

const EVENT_FORM =
`<form class="pt-6 space-y-4" th:action="@{/event/create}"
    th:object="\${event}" method="post">
  <div>
    <label for="eventName"
        class="block mb-2 text-sm font-medium text-gray-900">
      Event Name <span class="text-red-400">*</span>
    </label>
    <input type="text" id="eventName" th:field="*{eventName}" required
        class="border-gray-300 shadow-sm bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none"/>
  </div>
  <div>
    <label for="eventDescription"
        class="block mb-2 text-sm font-medium text-gray-900">
      Event Description <span class="text-red-400">*</span>
    </label>
    <textarea id="eventDescription" th:field="*{eventDescription}" required rows="4"
        class="border-gray-300 shadow-sm bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none"></textarea>
  </div>
  <div>
    <label for="eventLocation"
        class="block mb-2 text-sm font-medium text-gray-900">
      Event Location <span class="text-red-400">*</span>
    </label>
    <input type="text" id="eventLocation" th:field="*{eventLocation}" required
        class="border-gray-300 shadow-sm bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none"/>
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full group">
      <label for="eventStartDatetime"
          class="block mb-2 text-sm font-medium text-gray-900">
        Event Start Date & Time <span class="text-red-400">*</span>
      </label>
      <input type="datetime-local" id="eventStartDatetime" th:field="*{eventStartDatetime}" required
          class="border-gray-300 shadow-sm bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none"/>
    </div>
    <div class="relative z-0 w-full group pt-4 sm:pt-0">
      <label for="eventEndDatetime"
          class="block mb-2 text-sm font-medium text-gray-900">
        Event End Date & Time <span class="text-red-400">*</span>
      </label>
      <input type="datetime-local" id="eventEndDatetime" th:field="*{eventEndDatetime}" required
          class="border-gray-300 shadow-sm bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none"/>
    </div>
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full group">
      <label for="registrationStartDatetime"
          class="block mb-2 text-sm font-medium text-gray-900">
        Registration Start Date & Time <span class="text-red-400">*</span>
      </label>
      <input type="datetime-local" id="registrationStartDatetime" th:field="*{registrationStartDatetime}" required
          class="border-gray-300 shadow-sm bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none"/>
    </div>
    <div class="relative z-0 w-full group pt-4 sm:pt-0">
      <label for="registrationEndDatetime"
          class="block mb-2 text-sm font-medium text-gray-900">
        Registration End Date & Time <span class="text-red-400">*</span>
      </label>
      <input type="datetime-local" id="registrationEndDatetime" th:field="*{registrationEndDatetime}" required
          class="border-gray-300 shadow-sm bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none"/>
    </div>
  </div>
  <button type="submit"
      class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-600 sm:w-fit focus:outline-none">
    Save
  </button>
</form>`;

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
            Now, we will configure the Spring Boot application to integrate with a PostgreSQL database and implement event creation functionality using Spring MVC architecture.
          </section>
          <section className="pt-4">
            By the end, we will develop an <strong>Event Registration System</strong> that allows users to register for an event.
            Also, Admin to create the event and view the registered users. <strong>However, In this article, we will focus on the event creation functionality.</strong>
          </section>
          <h2 className="text-xl mt-6">
            <strong>Database Schema for Event Registration System</strong>
          </h2>
          <section>
            Before we get our hands dirty with development, let&apos;s take a look at the database diagram of the Event
            Registration System. It is a best practice to have a clear understanding of the database schema before starting the development.
            <Image src={EVENT_REGISTRATION_SYSTEM_DB_DIAGRAM} className="border mt-2" width="650"
                alt="Event Registration Database Diagram">
            </Image>
          </section>
          <section className="mt-4">
            Add the following SQL code in <code className="code-inline background">resources / schema.sql</code> to create the database tables for the Event Registration System.
            Spring Boot will automatically execute this script on application startup to create the necessary tables.
            <HighlightCode code={USER_ROLE_TABLE} language="sql" path="resources / schema.sql"/>
          </section>
          <h2 className="text-xl mt-6">
            Provision PostgreSQL Database and Configure PostgreSQL Driver
          </h2>
          <section>
            To provision PostgreSQL database, we will use Docker to run a PostgreSQL container. Here is a sample <code className="code-inline background">docker-compose.yml</code> file to
            run PostgreSQL container. Make sure to have Docker installed on your machine.
            <HighlightCode code={POSTGRESQL_DOCKER_COMPOSE} language="yaml" path="docker-compose.yml"/>
            <div className="pt-2">
              Run the following command to start the PostgreSQL container:
              <HighlightCode code="docker-compose up -d" language="shell" path=""/>
            </div>
          </section>
          <section className="pt-4">
            Now, To configure the PostgreSQL driver in the Spring Boot application, update the <code className="code-inline background">application.yml</code> file with the following config:
            <HighlightCode code={POSTGRESQL_APPLICATION_CONFIG} language="yaml" path="resources / application.yml"/>
            <div className="pt-2">
              Make sure sql init mode is set to <code className="code-inline background">never</code> to avoid executing the schema.sql file in the production environment.
            </div>
          </section>
          <section className="pt-4">
            Now, we can start the Spring Boot application and it will automatically create the necessary tables in the PostgreSQL database.
            You can verify the tables by connecting to the PostgreSQL database using a database client like DBeaver or pgAdmin.
          </section>
          <h2 className="text-xl mt-6">
            <strong>Event Creation with Spring MVC Architecture</strong>
          </h2>
          <section>
            In a typical real-world application, event creation functionality is restricted to admin users. However, to keep things simple, we&apos;ll allow all
            users to create events in this implementation. This approach will allow to focus on the technical aspects without getting into complex role-based access control at this stage.
          </section>
          <section className="pt-4">
            We&apos;ll begin by implementing the backend functionality. This includes creating <code className="code-inline">Event</code> entity, defining Repository interface for database operations,
            building service layer to handle business logic, and setting up controller to handle form submissions and page rendering.
            <HighlightCode code={EVENT_ENTITY} language="java" path="entities / Event.java"/>
            <HighlightCode code={EVENT_REPOSITORY} language="java" path="repositories / EventRepository.java"/>
            <HighlightCode code={EVENT_SERVICE} language="java" path="services / EventService.java"/>
          </section>
          <section className="pt-4">
            Instead of exposing REST APIs, we&apos;ll work with traditional Spring MVC patterns to support server-side rendering with Thymeleaf. Once the backend is in place, we&apos;ll test the form-based
            submission using tools like <strong>Postman</strong> to ensure that event data is processed and stored in database correctly.
            <HighlightCode code={EVENT_CONTROLLER} language="java" path="controllers / EventController.java"/>
            <Image src={EVENT_CREATE_POSTMAN} alt="Create Event Request in Postman" className="border mt-2"/>
          </section>
          <section className="pt-4">
            After confirming that API is working as expected, we&apos;ll move to frontend part. We&apos;ll create a simple HTML form named <code className="code-inline background">create.html</code> inside
            the <code className="code-inline background">resources/templates/event</code> directory. This form will allow users to input event details and submit them to the backend. The backend will process the form data
            and save the event information in the PostgreSQL database.
            <HighlightCode code={EVENT_FORM} language="html" path="resources / templates / event / create.html"/>
          </section>
          <section className="pt-2">
            You can integrate google maps API to search for event location and any date picker library to select registration and event date and time. To keep things simple, we are using a basic HTML form.
            You can refer to this GitHub repository for the complete implementation and reference, <Link href="https://github.com/MahediSabuj/event-registration/tree/v1.0.0" className="text-blue-600" target="_blank">https://github.com/MahediSabuj/event-registration/tree/v1.0.0</Link>
          </section>
          <section className="pt-6">
            Hopefully, you have successfully created the event creation functionality using Spring Boot and PostgreSQL. In the next article, we will implement the user registration and login functionality using Spring Security.
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
