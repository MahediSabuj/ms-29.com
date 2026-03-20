import { IArticleItem } from "@/types/article";
import TOPICS from "@/data/article/topics";

export const LOCAL_KUBERNETES_SETUP_WITH_KIND: IArticleItem = {
  title: "Deploy Microservices Locally Using Kubernetes Kind",
  description: `Running microservices locally in a production-like Kubernetes environment helps catch infrastructure issues early,
    before they ever reach UAT or production. This guide walks through setting up a local Kubernetes cluster using Kind (Kubernetes in Docker),
    building Docker images for the FreightFlow Nexus services, and deploying them using Kustomize overlays.`,
  url: `${TOPICS.K8S.url}/local-kubernetes-setup-with-kind`,
  publishDate: "March 20, 2026",
  modifiedDate: "March 20, 2026",
  topics: [ TOPICS.K8S ],
  active: true
}

export const K8S: IArticleItem[] = [
  LOCAL_KUBERNETES_SETUP_WITH_KIND,
].filter(m => m.active);
