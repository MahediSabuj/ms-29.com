import { IArticleItem } from "@/types/article";
import TOPICS from "@/data/article/topics";

export const UNDERSTANDING_KUBERNETES_FUNDAMENTALS: IArticleItem = {
  title: "Understanding Kubernetes Fundamentals",
  description: `Kubernetes has become the de facto standard for container orchestration, but its complexity can be overwhelming
    for newcomers. This comprehensive guide breaks down Kubernetes architecture, core concepts, and essential patterns to help you
    build a solid foundation. Learn about pods, deployments, services, and how they work together to run scalable applications.`,
  url: `${TOPICS.K8S.url}/understanding-kubernetes-fundamentals`,
  publishDate: "February 17, 2026",
  modifiedDate: "February 17, 2026",
  topics: [ TOPICS.K8S ],
  active: false
}

export const DEPLOY_MICROSERVICE_TO_KUBERNETES_LOCAL_ENVIRONMENT: IArticleItem = {
  title: "Deploy Microservices to Kubernetes Local Environment",
  description: `Running microservices locally in a production-like Kubernetes environment helps catch infrastructure issues early,
    before they ever reach UAT or production. This guide walks through setting up a local Kubernetes cluster using Kind (Kubernetes in Docker),
    building Docker images for the FreightFlow Nexus services, and deploying them using Kustomize overlays.`,
  url: `${TOPICS.K8S.url}/deploy-microservice-to-kubernetes-local-environment`,
  publishDate: "March 20, 2026",
  modifiedDate: "March 20, 2026",
  topics: [ TOPICS.K8S ],
  active: true
}

export const DEPLOY_MICROSERVICE_TO_AKS: IArticleItem = {
  title: "Deploy Microservices to Azure Kubernetes Service",
  description: `Taking your microservices from local development to production requires a managed Kubernetes platform like
    Azure Kubernetes Service (AKS). This guide demonstrates deploying containerized applications to AKS using Azure Container Registry,
    Kustomize overlays for environment-specific configurations, and production-ready practices including ingress controllers and monitoring.`,
  url: `${TOPICS.K8S.url}/deploy-microservice-to-azure-kubernetes-service`,
  publishDate: "March 20, 2026",
  modifiedDate: "March 20, 2026",
  topics: [ TOPICS.K8S ],
  active: false
}

export const K8S: IArticleItem[] = [
  UNDERSTANDING_KUBERNETES_FUNDAMENTALS,
  DEPLOY_MICROSERVICE_TO_KUBERNETES_LOCAL_ENVIRONMENT,
  DEPLOY_MICROSERVICE_TO_AKS,
].filter(m => m.active);
