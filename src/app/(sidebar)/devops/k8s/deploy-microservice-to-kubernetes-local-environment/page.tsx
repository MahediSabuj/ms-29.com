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
  DEPLOY_MICROSERVICE_TO_KUBERNETES_LOCAL_ENVIRONMENT as ARTICLE
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
            before they ever reach UAT or production. This hands-on guide walks you through deploying a complete microservices
            application to a local Kubernetes cluster using <strong>Kind (Kubernetes in Docker)</strong>.
          </section>
          <section className="pt-4">
            You&apos;ll learn how to build Docker images, load them into Kind&apos;s internal registry, configure environment-specific
            settings with Kustomize, and access your services locally. By the end, all four services (Config Server, API, Tracking,
            and Gateway) will be running in Kubernetes pods and accessible via port-forwarding.
          </section>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-4">
            <strong>New to Kubernetes?</strong> Check out our companion article
            <Link className="text-blue-600" href="/devops/k8s/understanding-kubernetes-fundamentals"><em> Understanding Kubernetes Fundamentals</em></Link> to learn the core concepts before diving into this practical guide.
          </div>

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
            <div className="mb-3">
              A Kubernetes cluster is where your applications run. Kind creates this cluster using Docker containers instead
              of virtual machines, making it lightweight and fast to start. We&apos;ll create a cluster named <code>nexus</code>:
            </div>
            <HighlightCode code={CREATE_CLUSTER} language="bash" path=""/>
            <div className="pt-4">
              After a few seconds, your cluster will be ready. Verify it&apos;s up and running:
            </div>
            <HighlightCode code={CLUSTER_INFO} language="bash" path=""/>
            <div className="pt-3">
              You should see output showing the Kubernetes control plane is running at a local address. This confirms <code>kubectl</code> (the
              Kubernetes command-line tool) is pointing at your new Kind cluster and can communicate with it. The cluster is now ready to accept deployments.
            </div>
          </section>

          <h2 className="text-xl mt-6">
            <strong>Build the Services</strong>
          </h2>
          <section>
            <div className="mb-3">
              Before we can run our services in Kubernetes, we need to compile them into executable JAR files.
              Maven will build all four Spring Boot microservices in one command:
            </div>
            <HighlightCode code={MVN_PACKAGE} language="bash" path=""/>
            <div className="pt-3">
              This command cleans previous builds and creates fresh JAR files in each service&apos;s <code>target/</code> directory.
              These JARs contain everything needed to run the services, including dependencies. The build also runs all tests
              to ensure code quality before deployment.
            </div>
          </section>

          <h2 className="text-xl mt-6">
            <strong>Build Docker Images</strong>
          </h2>
          <section>
            <div className="mb-3">
              Kubernetes runs applications in containers. We need to package each JAR file into a Docker image, which
              includes the Java runtime, the application code, and all dependencies. This makes the application portable
              and consistent across environments.
            </div>
            <HighlightCode code={DOCKER_BUILD} language="bash" path=""/>
            <div className="pt-3">
              Each command builds an image tagged with version <code>v0.0.4</code>. The tag helps track different
              versions of your application. After building, you can verify the images exist by running <code>docker images</code>.
            </div>
          </section>

          <h2 className="text-xl mt-6">
            <strong>Load Images into Kind</strong>
          </h2>
          <section>
            <div className="mb-3">
              Here&apos;s a critical step unique to Kind: the cluster runs inside Docker containers with its own isolated
              image registry. Even though you built images locally with Docker, Kind can&apos;t see them yet. You must
              explicitly transfer each image into the Kind cluster:
            </div>
            <HighlightCode code={KIND_LOAD} language="bash" path=""/>
            <div className="pt-3">
              This copies each image from your local Docker daemon into Kind&apos;s internal registry. Each load takes a
              few seconds depending on image size. You&apos;ll see a progress indicator as the image is transferred.
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-4">
              <strong>Common Mistake:</strong> Forgetting this step causes Kubernetes pods to fail with <code>ImagePullBackOff</code>
              errors. The pods try to pull images from Docker Hub or other registries, but the images only exist locally.
              Loading them into Kind makes them available to the cluster.
            </div>
          </section>

          <h2 className="text-xl mt-6">
            <strong>Apply Kubernetes Manifests</strong>
          </h2>
          <section>
            <div className="mb-3">
              Now we tell Kubernetes what to deploy. Instead of plain YAML files, this project uses <strong>Kustomize</strong>,
              a built-in Kubernetes tool that lets you customize configurations for different environments (local, UAT, production)
              without duplicating files.
            </div>
            <div className="pt-2">
              One command applies all resources for the local environment:
            </div>
            <HighlightCode code={APPLY_MANIFESTS} language="bash" path=""/>
            <div className="pt-3">
              This creates namespaces, service accounts, deployments, services, and secrets. You&apos;ll see output like <code>namespace/nexus created</code>, <code>deployment.apps/api created</code>, etc., as
              Kubernetes processes each resource.
            </div>
            <div className="pt-4">
              To preview what will be deployed without actually applying it:
            </div>
            <HighlightCode code={PREVIEW_MANIFESTS} language="bash" path=""/>
            <div className="pt-3">
              This shows the fully merged YAML that Kubernetes will receive, helpful for debugging configuration issues.
            </div>
            <div className="pt-4">The Kustomize directory layout looks like this:</div>
            <HighlightCode code={DIRECTORY_STRUCTURE} language="bash" path=""/>
            <div className="pt-3">
              The <code>base/</code> folder contains shared configurations used everywhere. The <code>overlays/local/</code>
              folder contains local-specific patches like <code>imagePullPolicy: Never</code> (telling Kubernetes not to pull
              from remote registries) and local database URLs.
            </div>
          </section>

          <h2 className="text-xl mt-6">
            <strong>Kustomize Configuration Deep Dive</strong>
          </h2>
          <section>
            <div className="mb-3">
              Let&apos;s look inside the Kustomize configuration to understand how it works. This section shows the actual
              YAML files that define your deployment. Understanding these helps you customize settings for your own projects
              or troubleshoot issues.
            </div>
            <div className="pt-2">
              <strong>Why show this?</strong> Most tutorials skip the configuration details, leaving you unable to adapt
              them to your needs. These examples provide a working template you can modify for your applications.
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
              The <code>rbac.yml</code> sets up permissions for service discovery. Spring Cloud Kubernetes needs
              permission to query the Kubernetes API to find other services:
            </div>
            <HighlightCode code={RBAC_YAML} language="yaml" path="k8s/base/rbac.yml"/>
            <div className="pt-3">
              This creates a service account (like a user account for apps), a role defining permissions
              (can read services/endpoints/pods), and a binding connecting them. Without this, Spring Cloud
              Kubernetes can&apos;t discover services and will fail to start.
            </div>

            <h3 className="text-lg font-semibold mt-5 mb-2">Sample Deployment &amp; Service</h3>
            <div className="mb-3">
              A Deployment tells Kubernetes how to run your application. Here&apos;s the API service deployment:
            </div>
            <HighlightCode code={API_DEPLOYMENT} language="yaml" path="k8s/base/freightflow-api/deployment.yml"/>
            <div className="pt-3">
              <strong>Key parts explained:</strong>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><code>replicas: 1</code> - Run one instance (pod) of this service</li>
                <li><code>image: nexus-api:v0.0.4</code> - Use the Docker image we built and loaded earlier</li>
                <li><code>ports</code> - Expose port 8080 for HTTP traffic</li>
                <li><code>env</code> - Environment variables (config server URL, environment name)</li>
                <li><code>resources</code> - Memory and CPU limits prevent one service from hogging all cluster resources</li>
              </ul>
            </div>

            <div className="pt-4">
              A Service makes your pods accessible on the network. Here&apos;s the API service definition:
            </div>
            <HighlightCode code={API_SERVICE} language="yaml" path="k8s/base/freightflow-api/service.yml"/>
            <div className="pt-3">
              This creates a stable network endpoint. Even if pods restart and get new IP addresses, other services
              can always reach the API at <code>api:8080</code>. The <code>ClusterIP</code> type means it&apos;s only
              accessible within the cluster (perfect for internal microservice communication).
            </div>

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
              Patches modify the base deployment for specific environments. Here&apos;s the local environment patch:
            </div>
            <HighlightCode code={API_PATCH} language="yaml" path="k8s/overlays/local/patches/api-deployment-patch.yml"/>
            <div className="pt-3">
              <strong>What this does:</strong> It merges with the base deployment, adding/overriding specific fields.
              The critical setting is <code>imagePullPolicy: Never</code>, which tells Kubernetes to only use locally
              loaded images. The environment variables come from secrets instead of being hardcoded, keeping sensitive
              data like database passwords secure.
            </div>

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
            <div className="mb-3">
              After applying the manifests, Kubernetes starts creating pods (containers running your services).
              This takes a minute as images are loaded, containers start, and health checks pass. Let&apos;s verify everything is working:
            </div>
            <HighlightCode code={GET_PODS} language="bash" path=""/>
            <div className="pt-3">
              You should see four pods (config, api, tracking, gateway) with <code>STATUS: Running</code> and <code>READY: 1/1</code>.
              The <code>1/1</code> means 1 out of 1 containers in the pod is ready. If you see <code>0/1</code>, the pod is still starting.
            </div>
            <div className="pt-4">
              To watch the status update in real-time (useful during deployment):
            </div>
            <HighlightCode code={WATCH_PODS} language="bash" path=""/>
            <div className="pt-3">
              Press <code>Ctrl+C</code> to stop watching. If a pod stays in <code>Pending</code>, <code>CrashLoopBackOff</code>,
              or <code>ImagePullBackOff</code> status for more than a minute, something&apos;s wrong.
            </div>
            <div className="pt-4">
              To troubleshoot a stuck pod, describe it to see detailed events:
            </div>
            <HighlightCode code={DESCRIBE_POD} language="bash" path=""/>
            <div className="pt-3">
              Look at the <code>Events</code> section at the bottom. Common issues include missing images (forgot to load into Kind),
              insufficient resources, or application crashes (check logs with <code>kubectl logs</code>).
            </div>
          </section>

          <h2 className="text-xl mt-6">
            <strong>Access Services Locally</strong>
          </h2>
          <section>
            <div className="mb-3">
              Your services are now running inside the Kind cluster, but you can&apos;t access them from your browser yet
              because they&apos;re on an internal network. Kind doesn&apos;t support LoadBalancer services (which would expose
              them automatically). Instead, use <code>port-forward</code> to create a tunnel from your localhost to a pod:
            </div>
            <HighlightCode code={PORT_FORWARD} language="bash" path=""/>
            <div className="pt-3">
              Each command runs in the foreground, so open a separate terminal tab for each one. The format is<code>localPort:podPort</code>. For example, <code>8072:8072</code> makes
              the gateway available at <code>localhost:8072</code>.
            </div>
            <div className="pt-4">
              Now test the gateway in your browser or with curl:
            </div>
            <HighlightCode code={TEST_URLS} language="bash" path=""/>
            <div className="pt-3">
              The gateway routes requests to other services internally. For example, <code>/api/*</code> routes to the API
              service,<code>/tracking/*</code> to the tracking service. This is how microservices communicate in Kubernetes.
            </div>
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
            <div className="mb-3">
              During development, you&apos;ll frequently modify code and need to see changes running in Kubernetes. Because
              Kind uses locally loaded images, you must rebuild, reload, and restart. Here&apos;s the complete workflow for
              updating one service (e.g., the gateway after fixing a bug):
            </div>
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

          <section>
            <div className="mb-3 mt-6">
              Congratulations! You&apos;ve successfully deployed a complete microservices application to a local Kubernetes cluster.
            </div>
            <ul className="list-disc ml-6 py-2 pl-2.5 space-y-2">
              <li>
                <strong>A working Kubernetes environment</strong>, mirrors production architecture without needing
                cloud resources or expensive infrastructure
              </li>
              <li>
                <strong>Four microservices running in pods</strong> with proper service discovery, networking, and config management through Spring Cloud Config
              </li>
              <li>
                <strong>Experience with Kustomize</strong> for managing environment-specific configurations, a critical skill
                for production Kubernetes deployments
              </li>
              <li>
                <strong>A repeatable deployment workflow</strong> you can use for any Spring Boot microservices project,
                not just this example
              </li>
            </ul>
          </section>

          <section className="pt-6">
            Running microservices locally in Kubernetes catches issues early. You&apos;ll
            discover problems with service communication, resource limits, configuration management, and deployment manifests
            on your laptop, not in UAT or production where they&apos;re expensive to fix. This dramatically shortens the
            feedback loop during development.
          </section>

          <section className="pt-6">
            This local setup is perfect for development, but production needs differ. In the
            next article, <Link className="text-blue-600" href="/devops/k8s/deploy-microservice-to-azure-kubernetes-service"><em>Deploy Microservices to Azure
            Kubernetes Service (AKS)</em></Link>, we&apos;ll take these same services and deploy them to a managed Kubernetes cluster
            in Azure, covering topics like Azure Container Registry integration, managed identities, ingress controllers, and production-grade
            monitoring. If you have questions or run into issues with this local setup, feel free to leave a comment below.
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
