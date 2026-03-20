import { Metadata } from "next";
import Link from "next/link";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/data/article/topics";
import ArticleReviewForm from "@/components/form/article-review/article-review";
import ArticleReviewList from "@/components/article-review-list/article-review-list";
import HighlightCode from "@/components/highlight/highlight";

import {
  LOCAL_KUBERNETES_SETUP_WITH_KIND as ARTICLE
} from "@/data/article/devops/k8s";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const DOCKERFILE_EXAMPLE = `FROM eclipse-temurin:21-jre-alpine

# Set working directory
WORKDIR /app

# Copy the jar file
COPY target/*.jar app.jar

# Expose the application port
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]`;

const CREATE_CLUSTER = `kind create cluster --name nexus`;

const CLUSTER_INFO = `kubectl cluster-info --context kind-nexus`;

const MVN_PACKAGE = `mvn clean package`;

const DOCKER_BUILD = `docker build -t nexus-config:v0.0.4 ./freightflow-config
docker build -t nexus-api:v0.0.4 ./freightflow-api
docker build -t nexus-tracking:v0.0.4 ./freightflow-tracking
docker build -t nexus-gateway:v0.0.4 ./freightflow-gateway`;

const KIND_LOAD = `kind load docker-image nexus-config:v0.0.4 --name nexus
kind load docker-image nexus-api:v0.0.4 --name nexus
kind load docker-image nexus-tracking:v0.0.4 --name nexus
kind load docker-image nexus-gateway:v0.0.4 --name nexus`;

const APPLY_MANIFESTS = `kubectl apply -k k8s/overlays/local/`;

const PREVIEW_MANIFESTS = `kubectl kustomize k8s/overlays/local/`;

const BASE_KUSTOMIZATION = `apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

namespace: nexus

resources:
  - namespace.yml
  - rbac.yml
  - freightflow-config/deployment.yml
  - freightflow-config/service.yml
  - freightflow-api/deployment.yml
  - freightflow-api/service.yml
  - freightflow-tracking/deployment.yml
  - freightflow-tracking/service.yml
  - freightflow-gateway/deployment.yml
  - freightflow-gateway/service.yml`;

const NAMESPACE_YAML = `apiVersion: v1
kind: Namespace
metadata:
  name: nexus`;

const RBAC_YAML = `apiVersion: v1
kind: ServiceAccount
metadata:
  name: nexus-service-account
  namespace: nexus
---
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: service-discovery-role
  namespace: nexus
rules:
  - apiGroups: [""]
    resources: ["services", "endpoints", "pods"]
    verbs: ["get", "list", "watch"]
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: service-discovery-rolebinding
  namespace: nexus
subjects:
  - kind: ServiceAccount
    name: nexus-service-account
    namespace: nexus
roleRef:
  kind: Role
  name: service-discovery-role
  apiGroup: rbac.authorization.k8s.io`;

const API_DEPLOYMENT = `apiVersion: apps/v1
kind: Deployment
metadata:
  name: api
  labels:
    app: api
spec:
  replicas: 1
  selector:
    matchLabels:
      app: api
  template:
    metadata:
      labels:
        app: api
    spec:
      serviceAccountName: nexus-service-account
      containers:
        - name: api
          image: nexus-api:v0.0.4
          ports:
            - containerPort: 8080
          env:
            - name: SPRING_CLOUD_CONFIG_URI
              value: "http://config:8071"
            - name: ENVIRONMENT
              value: "default"
          resources:
            requests:
              memory: "512Mi"
              cpu: "500m"
            limits:
              memory: "1Gi"
              cpu: "1000m"`;

const API_SERVICE = `apiVersion: v1
kind: Service
metadata:
  name: api
  labels:
    app: api
spec:
  type: ClusterIP
  selector:
    app: api
  ports:
    - name: http
      port: 8080
      targetPort: 8080
      protocol: TCP`;

const LOCAL_KUSTOMIZATION = `apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

resources:
  - ../../base
  - secrets.yml

patches:
  - path: patches/config-deployment-patch.yml
  - path: patches/api-deployment-patch.yml
  - path: patches/tracking-deployment-patch.yml
  - path: patches/gateway-deployment-patch.yml`;

const LOCAL_SECRETS = `apiVersion: v1
kind: Secret
metadata:
  name: nexus-secrets
  namespace: nexus
type: Opaque
stringData:
  CONFIG_REPO_URL: "https://github.com/your-org/nexus-config"
  GITHUB_TOKEN: "<YOUR_GITHUB_TOKEN>"
  DB_URL: "jdbc:postgresql://localhost:5432/nexus"
  DB_USERNAME: "postgres"
  DB_PASSWORD: "<YOUR_DB_PASSWORD>"`;

const API_PATCH = `apiVersion: apps/v1
kind: Deployment
metadata:
  name: api
spec:
  template:
    spec:
      containers:
        - name: api
          imagePullPolicy: Never  # Critical for Kind
          env:
            - name: ENVIRONMENT
              value: "local"
            - name: SPRING_DATASOURCE_URL
              valueFrom:
                secretKeyRef:
                  name: nexus-secrets
                  key: DB_URL
            - name: SPRING_DATASOURCE_USERNAME
              valueFrom:
                secretKeyRef:
                  name: nexus-secrets
                  key: DB_USERNAME
            - name: SPRING_DATASOURCE_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: nexus-secrets
                  key: DB_PASSWORD`;

const DIRECTORY_STRUCTURE = `k8s/
├── base/                        # Shared manifests
│   ├── kustomization.yml
│   ├── namespace.yml
│   ├── rbac.yml
│   ├── freightflow-config/
│   ├── freightflow-api/
│   ├── freightflow-tracking/
│   └── freightflow-gateway/
└── overlays/
    ├── local/                   # Kind (local development)
    │   ├── kustomization.yml
    │   ├── secrets.yml
    │   └── patches/
    └── aks/
        ├── uat/                 # AKS UAT
        └── prod/                # AKS Prod`;

const GET_PODS = `kubectl get pods -n nexus`;

const WATCH_PODS = `kubectl get pods -n nexus -w`;

const DESCRIBE_POD = `kubectl describe pod <pod-name> -n nexus`;

const PORT_FORWARD = `# Config Server (port 8071)
kubectl port-forward -n nexus deployment/config 8071:8071

# API Service (port 8080)
kubectl port-forward -n nexus deployment/api 8080:8080

# Tracking Service (port 8090)
kubectl port-forward -n nexus deployment/tracking 8090:8090

# Gateway (port 8072)
kubectl port-forward -n nexus deployment/gateway 8072:8072`;

const TEST_URLS = `http://localhost:8072/config/api/dev
http://localhost:8072/api/<endpoint>`;

const REDEPLOY_SINGLE = `# 1. Rebuild the jar
mvn clean package -pl freightflow-gateway

# 2. Rebuild the Docker image
docker build -t nexus-gateway:v0.0.4 ./freightflow-gateway

# 3. Remove the old image from Kind's cache
docker exec nexus-control-plane crictl rmi nexus-gateway:v0.0.4

# 4. Load the new image
kind load docker-image nexus-gateway:v0.0.4 --name nexus

# 5. Restart the deployment to pick up the new image
kubectl rollout restart deployment/gateway -n nexus`;

const REDEPLOY_ALL = `mvn clean package \\
  -pl freightflow-config,freightflow-api,freightflow-tracking,freightflow-gateway

for svc in config api tracking gateway; do
  docker build -t nexus-\${svc}:v0.0.4 ./freightflow-\${svc}
  docker exec nexus-control-plane crictl rmi nexus-\${svc}:v0.0.4
  kind load docker-image nexus-\${svc}:v0.0.4 --name nexus
  kubectl rollout restart deployment/\${svc} -n nexus
done`;

const POD_MANAGEMENT = `# Check pod status
kubectl get pods -n nexus

# Describe a pod (for debugging startup issues)
kubectl describe pod <pod-name> -n nexus

# Reapply config and restart
kubectl apply -k k8s/overlays/local/
kubectl rollout restart deployment/api -n nexus

# Delete and recreate all resources
kubectl delete -k k8s/overlays/local/
kubectl apply -k k8s/overlays/local/

# Delete the entire cluster
kind delete cluster --name nexus`;

const LOG_TAILING = `# Follow logs for a deployment
kubectl logs -f -n nexus deployment/config
kubectl logs -f -n nexus deployment/api
kubectl logs -f -n nexus deployment/gateway

# View last 100 lines
kubectl logs --tail=100 -n nexus deployment/api

# Follow logs for all pods of a service
kubectl logs -f -l app=api -n nexus`;

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: TOPICS.K8S.title,
    url: TOPICS.K8S.url
  }],
  current: ARTICLE.title
}

export default function KubernetesLocalSetup() {
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
            Running microservices locally in a production-like Kubernetes environment helps catch infrastructure issues early,
            before they ever reach UAT or production. This guide walks through setting up a local Kubernetes cluster using
            <strong> Kind (Kubernetes in Docker)</strong>, building Docker images for the FreightFlow Nexus services,
            and deploying them using Kustomize overlays. By the end, all four services (Config Server, API, Tracking,
            and Gateway) will be running locally and accessible via port-forwarding.
          </section>

          <h2 className="text-xl mt-6">
            <strong>Prerequisites</strong>
          </h2>
          <section>
            <div className="mb-2">Make sure the following tools are installed before proceeding:</div>
            <ul className="list-disc ml-6 py-1 pl-2.5">
              <li>Java 21+</li>
              <li>Maven 3.9+</li>
              <li>Docker</li>
              <li>
                <Link href="https://kind.sigs.k8s.io/docs/user/quick-start/#installation" className="text-blue-600" target="_blank">
                  Kind
                </Link> (Kubernetes in Docker)
              </li>
              <li>kubectl</li>
            </ul>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-4">
              <strong>Note:</strong> Kind is a lightweight tool that runs Kubernetes clusters inside Docker containers.
              It is ideal for local development and CI pipelines where a full cloud cluster is not needed.
            </div>
          </section>

          <h2 className="text-xl mt-6">
            <strong>FreightFlow Nexus Services Overview</strong>
          </h2>
          <section>
            <div className="mb-3">The application consists of four Spring Boot microservices:</div>
            <ul className="list-disc ml-6 py-1 pl-2.5 space-y-2">
              <li><strong>Config Server (8071)</strong> - Centralized configuration management using Spring Cloud Config</li>
              <li><strong>API Service (8080)</strong> - Core business logic for freight operations (shipments, orders, customers)</li>
              <li><strong>Tracking Service (8090)</strong> - Real-time shipment tracking and GPS location updates</li>
              <li><strong>Gateway (8072)</strong> - API Gateway for routing, authentication, and load balancing</li>
            </ul>
          </section>

          <h2 className="text-xl mt-6">
            <strong>Dockerfile Example</strong>
          </h2>
          <section>
            Each service uses a similar Dockerfile. Here&apos;s the structure:
            <HighlightCode code={DOCKERFILE_EXAMPLE} language="dockerfile" path="freightflow-api/Dockerfile"/>
            <div className="pt-3">
              All services use the <code>eclipse-temurin:21-jre-alpine</code> base image for a lightweight footprint (~170MB).
              The pattern is identical across services, with only port numbers varying.
            </div>
          </section>

          <h2 className="text-xl mt-6">
            <strong>Create the Kind Cluster</strong>
          </h2>
          <section>
            Start by creating a local cluster named <code>nexus</code>:
            <HighlightCode code={CREATE_CLUSTER} language="bash" path=""/>
            <div className="pt-4">Verify the cluster is up and running:</div>
            <HighlightCode code={CLUSTER_INFO} language="bash" path=""/>
            <div className="pt-2">
              This confirms that <code>kubectl</code> is pointing at your local Kind cluster and the API server is reachable.
            </div>
          </section>

          <h2 className="text-xl mt-6">
            <strong>Build the Services</strong>
          </h2>
          <section>
            From the project root, package all microservices:
            <HighlightCode code={MVN_PACKAGE} language="bash" path=""/>
            <div className="pt-2">
              This produces the <code>.jar</code> artifacts for each service module under their respective <code>target/</code> directories.
            </div>
          </section>

          <h2 className="text-xl mt-6">
            <strong>Build Docker Images</strong>
          </h2>
          <section>
            Build Docker images for all four services:
            <HighlightCode code={DOCKER_BUILD} language="bash" path=""/>
          </section>

          <h2 className="text-xl mt-6">
            <strong>Load Images into Kind</strong>
          </h2>
          <section>
            Kind runs its own internal container registry isolated from the Docker daemon. Images built locally are not
            automatically visible inside the cluster. They must be loaded explicitly:
            <HighlightCode code={KIND_LOAD} language="bash" path=""/>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-4">
              <strong>Important:</strong> Skipping this step is a common mistake. Without loading images into Kind,
              Kubernetes will fail to pull them and pods will remain in <code>ErrImagePull</code> or <code>ImagePullBackOff</code> state.
            </div>
          </section>

          <h2 className="text-xl mt-6">
            <strong>Apply Kubernetes Manifests</strong>
          </h2>
          <section>
            The project uses <strong>Kustomize</strong> to manage environment-specific configurations. A single command
            applies all base manifests with local patches, including <code>imagePullPolicy</code>, environment variables, and secrets:
            <HighlightCode code={APPLY_MANIFESTS} language="bash" path=""/>
            <div className="pt-4">To preview the fully rendered manifests without actually deploying:</div>
            <HighlightCode code={PREVIEW_MANIFESTS} language="bash" path=""/>
            <div className="pt-4">The Kustomize directory layout looks like this:</div>
            <HighlightCode code={DIRECTORY_STRUCTURE} language="bash" path=""/>
          </section>

          <h2 className="text-xl mt-6">
            <strong>Kustomize Configuration Deep Dive</strong>
          </h2>
          <section>
            <div className="mb-3">
              Understanding the Kustomize structure helps you customize deployments for different environments.
              Let&apos;s examine the key configuration files:
            </div>

            <h3 className="text-lg font-semibold mt-5 mb-2">Base Configuration</h3>
            <div className="mb-3">
              The base <code>kustomization.yml</code> defines shared resources used across all environments:
            </div>
            <HighlightCode code={BASE_KUSTOMIZATION} language="yaml" path="k8s/base/kustomization.yml"/>

            <div className="pt-4">
              The <code>namespace.yml</code> creates an isolated namespace for the application:
            </div>
            <HighlightCode code={NAMESPACE_YAML} language="yaml" path="k8s/base/namespace.yml"/>

            <div className="pt-4">
              The <code>rbac.yml</code> sets up permissions for service discovery (required for Spring Cloud Kubernetes):
            </div>
            <HighlightCode code={RBAC_YAML} language="yaml" path="k8s/base/rbac.yml"/>

            <h3 className="text-lg font-semibold mt-5 mb-2">Sample Deployment &amp; Service</h3>
            <div className="mb-3">
              Here&apos;s the API service deployment configuration:
            </div>
            <HighlightCode code={API_DEPLOYMENT} language="yaml" path="k8s/base/freightflow-api/deployment.yml"/>

            <div className="pt-4">
              And its corresponding service definition:
            </div>
            <HighlightCode code={API_SERVICE} language="yaml" path="k8s/base/freightflow-api/service.yml"/>

            <h3 className="text-lg font-semibold mt-5 mb-2">Local Overlay Configuration</h3>
            <div className="mb-3">
              The local overlay <code>kustomization.yml</code> references base resources and applies environment-specific patches:
            </div>
            <HighlightCode code={LOCAL_KUSTOMIZATION} language="yaml" path="k8s/overlays/local/kustomization.yml"/>

            <div className="pt-4">
              Secrets are defined in <code>secrets.yml</code> (never commit real secrets to Git):
            </div>
            <HighlightCode code={LOCAL_SECRETS} language="yaml" path="k8s/overlays/local/secrets.yml"/>

            <div className="pt-4">
              Patch files customize deployments for the local environment. Here&apos;s the API deployment patch:
            </div>
            <HighlightCode code={API_PATCH} language="yaml" path="k8s/overlays/local/patches/api-deployment-patch.yml"/>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-4">
              <strong>Key Points:</strong>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li><code>imagePullPolicy: Never</code> is critical for Kind to use locally loaded images</li>
                <li>Patches use strategic merge to add/override specific fields without duplicating entire manifests</li>
                <li>Secrets are referenced via <code>secretKeyRef</code> to avoid hardcoding sensitive values</li>
                <li>Resource limits prevent any single service from consuming all cluster resources</li>
              </ul>
            </div>
          </section>

          <h2 className="text-xl mt-6">
            <strong>Verify Pods are Running</strong>
          </h2>
          <section>
            After applying manifests, check the status of all pods in the <code>nexus</code> namespace:
            <HighlightCode code={GET_PODS} language="bash" path=""/>
            <div className="pt-4">Wait until all pods show <code>STATUS: Running</code> and <code>READY: 1/1</code>. To watch them in real-time:</div>
            <HighlightCode code={WATCH_PODS} language="bash" path=""/>
            <div className="pt-4">If a pod is stuck, describe it to inspect events and identify the root cause:</div>
            <HighlightCode code={DESCRIBE_POD} language="bash" path=""/>
          </section>

          <h2 className="text-xl mt-6">
            <strong>Access Services Locally</strong>
          </h2>
          <section>
            Kind does not support <code>LoadBalancer</code> type services out of the box. Use <code>kubectl port-forward</code>
            to expose each service on a local port:
            <HighlightCode code={PORT_FORWARD} language="bash" path=""/>
            <div className="pt-4">Test the gateway by hitting these URLs in your browser or via curl:</div>
            <HighlightCode code={TEST_URLS} language="bash" path=""/>
          </section>

          <h2 className="text-xl mt-6">
            <strong>Service Overview</strong>
          </h2>
          <section>
            <div className="overflow-x-auto my-4">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Service</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Spring App Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Port</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">K8s Deployment</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Image</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Config Server</td>
                    <td className="border border-gray-300 px-4 py-2"><code>config</code></td>
                    <td className="border border-gray-300 px-4 py-2">8071</td>
                    <td className="border border-gray-300 px-4 py-2"><code>config</code></td>
                    <td className="border border-gray-300 px-4 py-2"><code>nexus-config:v0.0.4</code></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">API</td>
                    <td className="border border-gray-300 px-4 py-2"><code>api</code></td>
                    <td className="border border-gray-300 px-4 py-2">8080</td>
                    <td className="border border-gray-300 px-4 py-2"><code>api</code></td>
                    <td className="border border-gray-300 px-4 py-2"><code>nexus-api:v0.0.4</code></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Tracking</td>
                    <td className="border border-gray-300 px-4 py-2"><code>tracking</code></td>
                    <td className="border border-gray-300 px-4 py-2">8090</td>
                    <td className="border border-gray-300 px-4 py-2"><code>tracking</code></td>
                    <td className="border border-gray-300 px-4 py-2"><code>nexus-tracking:v0.0.4</code></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Gateway</td>
                    <td className="border border-gray-300 px-4 py-2"><code>gateway</code></td>
                    <td className="border border-gray-300 px-4 py-2">8072</td>
                    <td className="border border-gray-300 px-4 py-2"><code>gateway</code></td>
                    <td className="border border-gray-300 px-4 py-2"><code>nexus-gateway:v0.0.4</code></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <h2 className="text-xl mt-6">
            <strong>Redeploying After Code Changes</strong>
          </h2>
          <section>
            When you modify a service and need to redeploy it, the image must be rebuilt and reloaded into Kind&apos;s cache
            since it does not pull from an external registry. Here is the full cycle for a single service (e.g., gateway):
            <HighlightCode code={REDEPLOY_SINGLE} language="bash" path=""/>
            <div className="pt-4">To redeploy all four services at once, use this loop:</div>
            <HighlightCode code={REDEPLOY_ALL} language="bash" path=""/>
          </section>

          <h2 className="text-xl mt-6">
            <strong>Useful Commands</strong>
          </h2>
          <section>
            <h3 className="text-lg font-semibold mt-4 mb-2">Pod &amp; Deployment Management</h3>
            <HighlightCode code={POD_MANAGEMENT} language="bash" path=""/>

            <h3 className="text-lg font-semibold mt-6 mb-2">Log Tailing</h3>
            <HighlightCode code={LOG_TAILING} language="bash" path=""/>
          </section>

          <section className="pt-4">
            That covers the complete local development workflow for FreightFlow Nexus microservices on Kind. This setup
            gives you a reproducible, production-like Kubernetes environment on your machine, ideal for validating
            deployment manifests, testing service discovery, and catching configuration issues before they reach UAT.
          </section>

          <section className="pt-4">
            In the next article, we will look at deploying the same services to <strong>AKS UAT</strong> using Azure Container
            Registry (ACR) with managed identity. If you have any questions, feel free to leave a comment below.
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
