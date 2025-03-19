import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const SETUP_CI_CD_PIPELINE_TO_DEPLOY_SPRING_BOOT_APP_TO_AWS_ECS: IArticleItem = {
  title: "Setup CI/CD pipeline for Spring Boot deployment on AWS ECS",
  description: `In today's fast-paced software development environment, Continuous Integration and Continuous Deployment (CI/CD) 
    pipelines have become essential tools. These pipelines streamline the development process, automate testing, and expedite 
    application deployment, making it faster, more reliable, and less error-prone.`,
  url: "/aws/ecs/setup-ci-cd-pipeline-for-spring-boot-deployment-on-aws-ecs",
  publishDate: "April 06, 2025",
  modifiedDate: "April 06, 2025",
  topics: [ TOPICS.AWS_ECS ],
  active: false
}

export const AWS_ECS: IArticleItem[] = [
  SETUP_CI_CD_PIPELINE_TO_DEPLOY_SPRING_BOOT_APP_TO_AWS_ECS
].filter(m => m.active);
