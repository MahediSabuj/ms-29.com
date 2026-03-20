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
  UNDERSTANDING_KUBERNETES_FUNDAMENTALS as ARTICLE
} from "@/data/article/devops/k8s";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const SIMPLE_POD = `apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
spec:
  containers:
    - name: nginx
      image: nginx:latest
      ports:
        - containerPort: 80`;

const DEPLOYMENT_EXAMPLE = `apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web
  template:
    metadata:
      labels:
        app: web
    spec:
      containers:
        - name: nginx
          image: nginx:1.21
          ports:
            - containerPort: 80`;

const SERVICE_EXAMPLE = `apiVersion: v1
kind: Service
metadata:
  name: web-service
spec:
  type: ClusterIP
  selector:
    app: web
  ports:
    - port: 80
      targetPort: 80`;

const NAMESPACE_EXAMPLE = `apiVersion: v1
kind: Namespace
metadata:
  name: development`;

const CONFIGMAP_EXAMPLE = `apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  database.url: "postgres://db:5432"
  log.level: "info"`;

const SECRET_EXAMPLE = `apiVersion: v1
kind: Secret
metadata:
  name: app-secrets
type: Opaque
stringData:
  db.password: "mySecurePassword"
  api.key: "secretApiKey123"`;

const RESOURCE_LIMITS = `resources:
  requests:
    memory: "256Mi"
    cpu: "250m"
  limits:
    memory: "512Mi"
    cpu: "500m"`;

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: TOPICS.K8S.title,
    url: TOPICS.K8S.url
  }],
  current: ARTICLE.title
}

export default function KubernetesFundamentals() {
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
            Kubernetes has become the industry standard for container orchestration, powering applications from startups
            to Fortune 500 companies. But understanding Kubernetes can feel overwhelming with its many concepts, components,
            and terminology. This guide breaks down the fundamentals into digestible concepts, helping you build a solid
            foundation before diving into practical deployments.
          </section>

          <section className="pt-4">
            Whether you&apos;re preparing to deploy microservices, migrate from Docker Compose, or just want to understand
            what Kubernetes does, this article explains the core concepts, architecture, and use cases in plain language
            with practical examples.
          </section>

          <h2 className="text-xl mt-6">
            <strong>What is Kubernetes?</strong>
          </h2>
          <section>
            <div className="mb-3">
              Kubernetes (often abbreviated as K8s) is an open-source container orchestration platform that automates
              deploying, scaling, and managing containerized applications. Think of it as an operating system for your
              distributed applications.
            </div>
            <div className="pt-3">
              <strong>What problem does it solve?</strong> When you have one container running on one server, Docker is
              sufficient. But when you need to run hundreds of containers across dozens of servers with automatic scaling,
              health checks, load balancing, and zero-downtime deployments, you need Kubernetes.
            </div>
            <div className="pt-3">
              <strong>Real-world analogy:</strong> If Docker is like having a single apartment, Kubernetes is like
              managing an entire apartment complex, handling maintenance, security, utilities, and ensuring everything
              runs smoothly across all units.
            </div>
          </section>

          <h2 className="text-xl mt-6">
            <strong>Why Use Kubernetes?</strong>
          </h2>
          <section>
            <div className="mb-3">Kubernetes provides several critical capabilities for production applications:</div>
            <ul className="list-disc ml-6 py-2 pl-2.5 space-y-2">
              <li>
                <strong>Self-healing:</strong> Automatically restarts failed containers, replaces containers, kills
                containers that don&apos;t respond to health checks
              </li>
              <li>
                <strong>Horizontal scaling:</strong> Scale your application up or down with a single command or
                automatically based on CPU/memory usage
              </li>
              <li>
                <strong>Load balancing:</strong> Distributes network traffic across multiple instances of your application
              </li>
              <li>
                <strong>Automated rollouts:</strong> Deploy new versions gradually, rolling back automatically if
                something goes wrong
              </li>
              <li>
                <strong>Secret management:</strong> Securely store and manage sensitive information like passwords,
                API keys, and certificates
              </li>
              <li>
                <strong>Platform independence:</strong> Run the same configuration on AWS, Azure, Google Cloud, or
                your own data center
              </li>
            </ul>
          </section>

          <h2 className="text-xl mt-6">
            <strong>Kubernetes Architecture</strong>
          </h2>
          <section>
            <div className="mb-3">
              A Kubernetes cluster consists of two main components: the <strong>Control Plane</strong> (the brain) and
              <strong> Worker Nodes</strong> (the muscle).
            </div>

            <h3 className="text-lg font-semibold mt-4 mb-2">Control Plane Components</h3>
            <div className="mb-3">The control plane manages the cluster and makes decisions about scheduling and scaling:</div>
            <ul className="list-disc ml-6 py-2 pl-2.5 space-y-2">
              <li>
                <strong>API Server:</strong> The front door to Kubernetes. All commands (kubectl, dashboards, automation)
                talk to the API server
              </li>
              <li>
                <strong>Scheduler:</strong> Decides which node should run each container based on resource requirements
                and constraints
              </li>
              <li>
                <strong>Controller Manager:</strong> Watches the cluster state and makes changes to match your desired
                configuration
              </li>
              <li>
                <strong>etcd:</strong> A distributed database that stores all cluster data (like a cluster&apos;s brain memory)
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-5 mb-2">Worker Node Components</h3>
            <div className="mb-3">Each worker node runs your application containers and includes:</div>
            <ul className="list-disc ml-6 py-2 pl-2.5 space-y-2">
              <li>
                <strong>Kubelet:</strong> An agent that ensures containers are running in pods as expected
              </li>
              <li>
                <strong>Container Runtime:</strong> Software that runs containers (Docker, containerd, or CRI-O)
              </li>
              <li>
                <strong>Kube-proxy:</strong> Manages networking rules, enabling communication between pods
              </li>
            </ul>
          </section>

          <h2 className="text-xl mt-6">
            <strong>Core Kubernetes Concepts</strong>
          </h2>
          <section>
            <h3 className="text-lg font-semibold mt-4 mb-2">Pods</h3>
            <div className="mb-3">
              A <strong>Pod</strong> is the smallest deployable unit in Kubernetes. It represents one or more containers
              that share storage and network resources. Think of a pod as a wrapper around your container(s).
            </div>
            <div className="pt-2 mb-3">
              <strong>Why not just containers?</strong> Pods allow multiple tightly coupled containers to share resources.
              For example, a web server container might share a pod with a logging sidecar container.
            </div>
            <HighlightCode code={SIMPLE_POD} language="yaml" path="pod.yml"/>
            <div className="pt-3">
              This creates a single nginx pod. However, you rarely create pods directly in production. Instead, you use
              Deployments.
            </div>

            <h3 className="text-lg font-semibold mt-5 mb-2">Deployments</h3>
            <div className="mb-3">
              A <strong>Deployment</strong> manages a set of identical pods, ensuring the desired number of replicas
              are always running. Deployments handle rolling updates, rollbacks, and scaling.
            </div>
            <HighlightCode code={DEPLOYMENT_EXAMPLE} language="yaml" path="deployment.yml"/>
            <div className="pt-3">
              This deployment creates 3 identical nginx pods. If one crashes, Kubernetes automatically creates a replacement.
              You can scale to 10 replicas with: <code>kubectl scale deployment web-app --replicas=10</code>
            </div>

            <h3 className="text-lg font-semibold mt-5 mb-2">Services</h3>
            <div className="mb-3">
              Pods are ephemeral; they can be created, destroyed, and replaced. Their IP addresses change. A <strong>Service</strong>
              provides a stable network endpoint to access a set of pods.
            </div>
            <HighlightCode code={SERVICE_EXAMPLE} language="yaml" path="service.yml"/>
            <div className="pt-3">
              <strong>Service Types:</strong>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><code>ClusterIP</code> - Internal access only (default)</li>
                <li><code>NodePort</code> - Exposes service on each node&apos;s IP at a static port</li>
                <li><code>LoadBalancer</code> - Creates a cloud load balancer (AWS ELB, Azure LB, etc.)</li>
              </ul>
            </div>

            <h3 className="text-lg font-semibold mt-5 mb-2">Namespaces</h3>
            <div className="mb-3">
              <strong>Namespaces</strong> provide logical isolation within a cluster. They&apos;re like folders for organizing
              resources, perfect for separating development, staging, and production environments.
            </div>
            <HighlightCode code={NAMESPACE_EXAMPLE} language="yaml" path="namespace.yml"/>
            <div className="pt-3">
              Resources in different namespaces are isolated. A service named <code>api</code> in the <code>development</code>
              namespace is separate from an <code>api</code> service in <code>production</code>.
            </div>

            <h3 className="text-lg font-semibold mt-5 mb-2">ConfigMaps and Secrets</h3>
            <div className="mb-3">
              <strong>ConfigMaps</strong> store non-sensitive configuration data (API URLs, feature flags) while
              <strong> Secrets</strong> store sensitive information (passwords, API keys, certificates).
            </div>
            <HighlightCode code={CONFIGMAP_EXAMPLE} language="yaml" path="configmap.yml"/>
            <div className="pt-4">
              <strong>Secrets</strong> are similar but encoded (not encrypted by default):
            </div>
            <HighlightCode code={SECRET_EXAMPLE} language="yaml" path="secret.yml"/>
            <div className="pt-3">
              Both are injected into pods as environment variables or mounted as files, allowing you to change
              configuration without rebuilding container images.
            </div>
          </section>

          <h2 className="text-xl mt-6">
            <strong>Resource Management</strong>
          </h2>
          <section>
            <div className="mb-3">
              Kubernetes allows you to specify resource requests (guaranteed resources) and limits (maximum resources)
              for each container:
            </div>
            <HighlightCode code={RESOURCE_LIMITS} language="yaml" path=""/>
            <div className="pt-3">
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>Requests:</strong> Kubernetes guarantees this amount. Used for scheduling decisions.</li>
                <li><strong>Limits:</strong> Maximum resources a container can use. Prevents one container from hogging resources.</li>
                <li><code>Mi</code> = Mebibytes (memory), <code>m</code> = millicores (CPU, 1000m = 1 core)</li>
              </ul>
            </div>
          </section>

          <h2 className="text-xl mt-6">
            <strong>Local Development Options</strong>
          </h2>
          <section>
            <div className="mb-3">
              Before deploying to production, you need a local Kubernetes environment for development and testing:
            </div>
            <div className="overflow-x-auto my-4">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Tool</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Best For</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Pros</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Cons</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2"><strong>Kind</strong></td>
                    <td className="border border-gray-300 px-4 py-2">CI/CD, testing multi-node clusters</td>
                    <td className="border border-gray-300 px-4 py-2">Fast, lightweight, multi-node support</td>
                    <td className="border border-gray-300 px-4 py-2">Requires Docker knowledge</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2"><strong>Minikube</strong></td>
                    <td className="border border-gray-300 px-4 py-2">Beginners, learning</td>
                    <td className="border border-gray-300 px-4 py-2">Easy setup, good docs, addons</td>
                    <td className="border border-gray-300 px-4 py-2">Slower than Kind, single-node only</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2"><strong>Docker Desktop</strong></td>
                    <td className="border border-gray-300 px-4 py-2">Mac/Windows users</td>
                    <td className="border border-gray-300 px-4 py-2">One-click enable, integrated</td>
                    <td className="border border-gray-300 px-4 py-2">Resource heavy, limited features</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2"><strong>K3s</strong></td>
                    <td className="border border-gray-300 px-4 py-2">Edge, IoT, resource-constrained</td>
                    <td className="border border-gray-300 px-4 py-2">Minimal resource usage</td>
                    <td className="border border-gray-300 px-4 py-2">Simplified, not full K8s</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <h2 className="text-xl mt-6">
            <strong>kubectl: The Kubernetes Command Line</strong>
          </h2>
          <section>
            <div className="mb-3">
              <code>kubectl</code> is the command-line tool for interacting with Kubernetes clusters. Here are essential commands:
            </div>
            <ul className="list-disc ml-6 py-2 pl-2.5 space-y-2">
              <li><code>kubectl get pods</code> - List all pods</li>
              <li><code>kubectl get services</code> - List all services</li>
              <li><code>kubectl describe pod &lt;name&gt;</code> - Detailed pod information</li>
              <li><code>kubectl logs &lt;pod-name&gt;</code> - View container logs</li>
              <li><code>kubectl apply -f config.yml</code> - Create/update resources from YAML</li>
              <li><code>kubectl delete pod &lt;name&gt;</code> - Delete a pod</li>
              <li><code>kubectl exec -it &lt;pod&gt; -- /bin/bash</code> - Shell into a container</li>
            </ul>
          </section>

          <h2 className="text-xl mt-6">
            <strong>Kustomize vs Helm</strong>
          </h2>
          <section>
            <div className="mb-3">
              Two popular tools for managing Kubernetes configurations:
            </div>
            <div className="pt-2">
              <strong>Kustomize</strong> (built into kubectl) uses a declarative approach to customize YAML files
              for different environments without templates. It&apos;s simpler and doesn&apos;t require learning a new DSL.
            </div>
            <div className="pt-3">
              <strong>Helm</strong> is a package manager for Kubernetes. It uses templates and allows you to install
              pre-built applications (charts) from a repository. Better for complex applications or when using third-party software.
            </div>
            <div className="pt-3">
              <strong>When to use what:</strong> Use Kustomize for custom applications where you control the manifests.
              Use Helm for installing third-party software (databases, monitoring tools) or when you need complex templating logic.
            </div>
          </section>

          <h2 className="text-xl mt-6">
            <strong>Common Pitfalls to Avoid</strong>
          </h2>
          <section>
            <ul className="list-disc ml-6 py-2 pl-2.5 space-y-2">
              <li>
                <strong>Not setting resource limits:</strong> One container can consume all node resources, starving other applications
              </li>
              <li>
                <strong>Using <code>:latest</code> tag:</strong> Makes deployments unpredictable. Always use specific version tags
              </li>
              <li>
                <strong>Storing secrets in code:</strong> Use Kubernetes Secrets or external secret management (Vault, AWS Secrets Manager)
              </li>
              <li>
                <strong>Running as root:</strong> Containers should run as non-root users for security
              </li>
              <li>
                <strong>No health checks:</strong> Kubernetes can&apos;t determine if your app is healthy without liveness/readiness probes
              </li>
              <li>
                <strong>Ignoring namespaces:</strong> Leads to cluttered clusters and accidental resource conflicts
              </li>
            </ul>
          </section>

          <h2 className="text-xl mt-6">
            <strong>Next Steps</strong>
          </h2>
          <section>
            <div className="mb-3">
              Now that you understand Kubernetes fundamentals, you&apos;re ready for hands-on practice:
            </div>
            <ul className="list-disc ml-6 py-2 pl-2.5 space-y-2">
              <li>
                <strong>
                  <Link href={`${TOPICS.K8S.url}/deploy-microservice-local-kubernetes-with-kind`} className="text-blue-600">
                    Deploy Microservices Locally Using Kubernetes Kind
                  </Link>
                </strong> - Set up a local cluster and deploy a complete microservices application
              </li>
              <li>
                <strong>Explore kubectl:</strong> Practice with commands on a local cluster before touching production
              </li>
              <li>
                <strong>Read official docs:</strong> The{" "}
                <Link href="https://kubernetes.io/docs/concepts/" className="text-blue-600" target="_blank">
                  Kubernetes documentation
                </Link>{" "}
                is comprehensive and well-written
              </li>
              <li>
                <strong>Try interactive tutorials:</strong> Check out{" "}
                <Link href="https://kubernetes.io/docs/tutorials/" className="text-blue-600" target="_blank">
                  Kubernetes interactive tutorials
                </Link>
              </li>
            </ul>
          </section>

          <section className="pt-6">
            <strong>Remember:</strong> Kubernetes has a learning curve, but you don&apos;t need to master everything at once.
            Start with the basics (pods, deployments, services), deploy simple applications locally, then gradually explore
            advanced features as your needs grow. The investment in learning Kubernetes pays off in scalability, reliability,
            and portability for your applications.
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
