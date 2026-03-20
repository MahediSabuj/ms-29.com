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
  DEPLOY_MICROSERVICE_TO_AKS as ARTICLE
} from "@/data/article/devops/k8s";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const AZURE_LOGIN = `az login
az account set --subscription "Your-Subscription-Name"`;

const CREATE_RESOURCE_GROUP = `az group create \\
  --name nexus-rg \\
  --location eastus`;

const CREATE_ACR = `az acr create \\
  --resource-group nexus-rg \\
  --name nexusacr \\
  --sku Basic \\
  --admin-enabled true`;

const ACR_LOGIN = `az acr login --name nexusacr`;

const GET_ACR_SERVER = `ACR_LOGIN_SERVER=$(az acr show --name nexusacr --query loginServer --output tsv)
echo $ACR_LOGIN_SERVER`;

const BUILD_PUSH_CONFIG = `cd freight-flow-nexus/config-server

# Build the application
./mvnw clean package

# Build Docker image with ACR tag
docker build -t $ACR_LOGIN_SERVER/config-server:v1.0.0 .

# Push to ACR
docker push $ACR_LOGIN_SERVER/config-server:v1.0.0`;

const BUILD_PUSH_ALL = `# API Service
cd ../api-service
./mvnw clean package
docker build -t $ACR_LOGIN_SERVER/api-service:v1.0.0 .
docker push $ACR_LOGIN_SERVER/api-service:v1.0.0

# Tracking Service
cd ../tracking-service
./mvnw clean package
docker build -t $ACR_LOGIN_SERVER/tracking-service:v1.0.0 .
docker push $ACR_LOGIN_SERVER/tracking-service:v1.0.0

# Gateway Service
cd ../gateway-service
./mvnw clean package
docker build -t $ACR_LOGIN_SERVER/gateway-service:v1.0.0 .
docker push $ACR_LOGIN_SERVER/gateway-service:v1.0.0`;

const VERIFY_ACR_IMAGES = `az acr repository list --name nexusacr --output table
az acr repository show-tags --name nexusacr --repository config-server --output table`;

const CREATE_AKS = `az aks create \\
  --resource-group nexus-rg \\
  --name nexus-aks \\
  --node-count 2 \\
  --node-vm-size Standard_B2s \\
  --enable-managed-identity \\
  --generate-ssh-keys \\
  --attach-acr nexusacr`;

const GET_AKS_CREDENTIALS = `az aks get-credentials --resource-group nexus-rg --name nexus-aks

# Verify connection
kubectl cluster-info
kubectl get nodes`;

const CREATE_OVERLAY_DIR = `cd k8s-manifests
mkdir -p overlays/aks`;

const AKS_KUSTOMIZATION = `apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

namespace: nexus

bases:
  - ../../base

images:
  - name: config-server
    newName: nexusacr.azurecr.io/config-server
    newTag: v1.0.0
  - name: api-service
    newName: nexusacr.azurecr.io/api-service
    newTag: v1.0.0
  - name: tracking-service
    newName: nexusacr.azurecr.io/tracking-service
    newTag: v1.0.0
  - name: gateway-service
    newName: nexusacr.azurecr.io/gateway-service
    newTag: v1.0.0

patchesStrategicMerge:
  - resources.yaml

configMapGenerator:
  - name: app-config
    behavior: merge
    literals:
      - ENVIRONMENT=aks
      - LOG_LEVEL=info`;

const AKS_RESOURCES_PATCH = `apiVersion: apps/v1
kind: Deployment
metadata:
  name: config-server
spec:
  template:
    spec:
      containers:
        - name: config-server
          resources:
            requests:
              memory: "512Mi"
              cpu: "250m"
            limits:
              memory: "1Gi"
              cpu: "500m"
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-service
spec:
  replicas: 2
  template:
    spec:
      containers:
        - name: api-service
          resources:
            requests:
              memory: "512Mi"
              cpu: "250m"
            limits:
              memory: "1Gi"
              cpu: "500m"
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: tracking-service
spec:
  replicas: 2
  template:
    spec:
      containers:
        - name: tracking-service
          resources:
            requests:
              memory: "512Mi"
              cpu: "250m"
            limits:
              memory: "1Gi"
              cpu: "500m"
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: gateway-service
spec:
  replicas: 2
  template:
    spec:
      containers:
        - name: gateway-service
          resources:
            requests:
              memory: "512Mi"
              cpu: "250m"
            limits:
              memory: "1Gi"
              cpu: "500m"`;

const DEPLOY_TO_AKS = `# Preview what will be deployed
kubectl kustomize overlays/aks

# Deploy to cluster
kubectl apply -k overlays/aks`;

const VERIFY_DEPLOYMENT = `# Check all resources
kubectl get all -n nexus

# Watch pod startup
kubectl get pods -n nexus -w

# Check pod details
kubectl describe pod <pod-name> -n nexus

# View logs
kubectl logs -f deployment/config-server -n nexus`;

const CHECK_ACR_INTEGRATION = `az aks check-acr --resource-group nexus-rg --name nexus-aks --acr nexusacr.azurecr.io`;

const INSTALL_NGINX_INGRESS = `# Add Helm repository
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update

# Install ingress controller
helm install ingress-nginx ingress-nginx/ingress-nginx \\
  --namespace ingress-nginx \\
  --create-namespace \\
  --set controller.service.type=LoadBalancer`;

const GET_INGRESS_IP = `kubectl get service ingress-nginx-controller -n ingress-nginx -w`;

const INGRESS_RESOURCE = `apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: nexus-ingress
  namespace: nexus
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  ingressClassName: nginx
  rules:
    - host: nexus.example.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: gateway-service
                port:
                  number: 8080`;

const APPLY_INGRESS = `kubectl apply -k overlays/aks

# Verify ingress
kubectl get ingress -n nexus
kubectl describe ingress nexus-ingress -n nexus`;

const GITHUB_ACTIONS_WORKFLOW = `name: Deploy to AKS

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Azure Login
        uses: azure/login@v1
        with:
          creds: \${{ secrets.AZURE_CREDENTIALS }}

      - name: Build and Push to ACR
        run: |
          az acr login --name nexusacr
          docker build -t nexusacr.azurecr.io/api-service:\${{ github.sha }} .
          docker push nexusacr.azurecr.io/api-service:\${{ github.sha }}

      - name: Set AKS Context
        uses: azure/aks-set-context@v3
        with:
          resource-group: nexus-rg
          cluster-name: nexus-aks

      - name: Deploy to AKS
        run: |
          kubectl set image deployment/api-service \\
            api-service=nexusacr.azurecr.io/api-service:\${{ github.sha }} \\
            -n nexus
          kubectl rollout status deployment/api-service -n nexus`;

const CLEANUP_RESOURCES = `# Delete the entire resource group (removes AKS, ACR, and all resources)
az group delete --name nexus-rg --yes --no-wait

# Or delete just the AKS cluster
az aks delete --resource-group nexus-rg --name nexus-aks --yes --no-wait

# Remove kubectl context
kubectl config delete-context nexus-aks`;

const breadcrumbs: IBreadCrumb = {
  items: [{
    title: TOPICS.K8S.title,
    url: TOPICS.K8S.url
  }],
  current: ARTICLE.title
}

export default function DeployMicroserviceToAKS() {
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
            Taking your microservices from local development to Azure Kubernetes Service (AKS) involves several steps:
            containerizing your applications, pushing images to Azure Container Registry, setting up an AKS cluster,
            and deploying with production-ready configurations. This guide demonstrates deploying the FreightFlow Nexus
            microservices to AKS using Kustomize overlays for environment-specific configurations.
          </section>

          <section className="pt-4">
            We&apos;ll use Azure Container Registry (ACR) for storing our Docker images and AKS as our managed Kubernetes platform.
            The same Kustomize base configurations we used locally will be adapted for the AKS environment through overlays,
            demonstrating infrastructure-as-code principles and environment promotion patterns.
          </section>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-4">
            <strong>Prerequisites:</strong> This guide assumes you&apos;ve completed our
            <Link className="text-blue-600" href="/devops/k8s/deploy-microservice-local-kubernetes-with-kind"><em> local Kubernetes setup with Kind</em></Link> and have the base Kustomize configurations ready. If you&apos;re new to Kubernetes, start with
            <Link className="text-blue-600" href="/devops/k8s/understanding-kubernetes-fundamentals"><em> Understanding Kubernetes Fundamentals</em></Link>.
          </div>

          <h2 className="text-xl mt-6">
            <strong>Prerequisites</strong>
          </h2>
          <section>
            <div className="mb-3">
              Before deploying to AKS, ensure you have:
            </div>

            <ul className="list-disc ml-6 py-2 pl-2.5 space-y-2">
              <li>Azure CLI installed and configured (<code>az --version</code>)</li>
              <li>kubectl installed (<code>kubectl version --client</code>)</li>
              <li>Docker installed and running</li>
              <li>Active Azure subscription with appropriate permissions</li>
              <li>Microservices source code (FreightFlow Nexus or your own)</li>
              <li>Kustomize base configurations from the local setup</li>
            </ul>

            <div className="mb-3 mt-4">
              Log into Azure using the CLI:
            </div>

            <HighlightCode code={AZURE_LOGIN} language="bash" path=""/>
          </section>

          <h2 className="text-xl mt-6">
            <strong>Azure Container Registry Setup</strong>
          </h2>
          <section>
            <div className="mb-3">
              Azure Container Registry (ACR) is a managed Docker registry service where we&apos;ll store our microservice images.
              ACR integrates seamlessly with AKS and provides private image storage with security scanning capabilities.
            </div>

            <h3 className="text-lg font-semibold mt-4 mb-2">Create Resource Group</h3>
            <div className="mb-3">
              First, create a resource group to organize all your AKS-related resources:
            </div>
            <HighlightCode code={CREATE_RESOURCE_GROUP} language="bash" path=""/>
            <div className="mb-3 mt-2">
              <strong>Expected Output:</strong> JSON response showing the resource group was created with &quot;provisioningState&quot;: &quot;Succeeded&quot;
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-2">Create ACR Instance</h3>
            <div className="mb-3">
              Create a container registry with a unique name. The Basic SKU is cost-effective for development:
            </div>
            <HighlightCode code={CREATE_ACR} language="bash" path=""/>
            <div className="mb-3 mt-2">
              The <code>--admin-enabled</code> flag enables the admin account for simplified authentication during development.
              For production, use managed identities or service principals instead.
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-2">Login to ACR</h3>
            <HighlightCode code={ACR_LOGIN} language="bash" path=""/>
            <div className="mb-3 mt-2">
              <strong>Expected Output:</strong> &quot;Login Succeeded&quot;
            </div>
          </section>

          <h2 className="text-xl mt-6">
            <strong>Build and Push Docker Images</strong>
          </h2>
          <section>
            <div className="mb-3">
              We need to build Docker images for each microservice and push them to ACR. We&apos;ll tag images with both
              the ACR registry URL and a version tag for proper image management.
            </div>

            <h3 className="text-lg font-semibold mt-4 mb-2">Get ACR Login Server</h3>
            <HighlightCode code={GET_ACR_SERVER} language="bash" path=""/>
            <div className="mb-3 mt-2">
              This command retrieves your ACR URL (e.g., <code>nexusacr.azurecr.io</code>) which we&apos;ll use for tagging images.
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-2">Build and Push Config Server</h3>
            <HighlightCode code={BUILD_PUSH_CONFIG} language="bash" path=""/>

            <h3 className="text-lg font-semibold mt-6 mb-2">Build and Push Remaining Services</h3>
            <div className="mb-3">
              Repeat for each microservice:
            </div>
            <HighlightCode code={BUILD_PUSH_ALL} language="bash" path=""/>

            <div className="mb-3 mt-4">
              <strong>Pro Tip:</strong> You can verify images in ACR using:
            </div>
            <HighlightCode code={VERIFY_ACR_IMAGES} language="bash" path=""/>
          </section>

          <h2 className="text-xl mt-6">
            <strong>Create AKS Cluster</strong>
          </h2>
          <section>
            <div className="mb-3">
              Azure Kubernetes Service provides a managed Kubernetes control plane. You only manage the worker nodes.
              We&apos;ll create a small cluster suitable for development and testing.
            </div>

            <h3 className="text-lg font-semibold mt-4 mb-2">Create the Cluster</h3>
            <HighlightCode code={CREATE_AKS} language="bash" path=""/>
            <div className="mb-3 mt-2">
              This command creates a 2-node cluster with:
            </div>

            <ul className="list-disc ml-6 py-2 pl-2.5 space-y-2">
              <li><strong>Standard_B2s VMs:</strong> Cost-effective for development (2 vCPUs, 4 GB RAM each)</li>
              <li><strong>Managed Identity:</strong> Azure-managed authentication instead of service principals</li>
              <li><strong>ACR Integration:</strong> The <code>--attach-acr</code> flag grants AKS pull permissions automatically</li>
            </ul>

            <div className="mb-3">
              Cluster creation takes 5-10 minutes. The output shows cluster details including FQDN and resource group.
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-2">Get Cluster Credentials</h3>
            <div className="mb-3">
              Download cluster credentials to configure kubectl:
            </div>
            <HighlightCode code={GET_AKS_CREDENTIALS} language="bash" path=""/>
            <div className="mb-3 mt-2">
              <strong>Expected Output:</strong> You should see 2 nodes in &quot;Ready&quot; state.
            </div>
          </section>

          <h2 className="text-xl mt-6">
            <strong>Create AKS Kustomize Overlay</strong>
          </h2>
          <section>
            <div className="mb-3">
              We&apos;ll create an AKS-specific overlay that modifies our base configurations with ACR image references
              and production-appropriate resource limits. The overlay approach lets us reuse base configurations while
              customizing for different environments.
            </div>

            <h3 className="text-lg font-semibold mt-4 mb-2">Create Overlay Directory</h3>
            <HighlightCode code={CREATE_OVERLAY_DIR} language="bash" path=""/>

            <h3 className="text-lg font-semibold mt-6 mb-2">Create kustomization.yaml</h3>
            <div className="mb-3">
              The AKS overlay references base configurations and applies environment-specific patches:
            </div>
            <HighlightCode code={AKS_KUSTOMIZATION} language="yaml" path=""/>
            <div className="mb-3 mt-2">
              The <code>images</code> section replaces local image references with ACR URLs. The <code>configMapGenerator</code>
              adds AKS-specific environment variables.
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-2">Create Resource Patch</h3>
            <div className="mb-3">
              Create <code>resources.yaml</code> to set production-appropriate resource limits:
            </div>
            <HighlightCode code={AKS_RESOURCES_PATCH} language="yaml" path=""/>
            <div className="mb-3 mt-2">
              We&apos;ve increased replicas to 2 for API, tracking, and gateway services to provide high availability.
              Resource limits prevent any single pod from consuming all node resources.
            </div>
          </section>

          <h2 className="text-xl mt-6">
            <strong>Deploy to AKS</strong>
          </h2>
          <section>
            <div className="mb-3">
              With our AKS cluster ready and overlay configured, we can deploy the microservices using Kustomize.
            </div>

            <h3 className="text-lg font-semibold mt-4 mb-2">Apply Configurations</h3>
            <HighlightCode code={DEPLOY_TO_AKS} language="bash" path=""/>
            <div className="mb-3 mt-2">
              <strong>Expected Output:</strong> You&apos;ll see creation confirmations for namespace, deployments, services, and ConfigMaps.
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-2">Verify Deployment</h3>
            <HighlightCode code={VERIFY_DEPLOYMENT} language="bash" path=""/>
            <div className="mb-3 mt-2">
              Wait for all pods to reach &quot;Running&quot; status. The config-server must be ready before other services start successfully.
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-2">Troubleshooting</h3>
            <div className="mb-3">
              Common issues and solutions:
            </div>

            <ul className="list-disc ml-6 py-2 pl-2.5 space-y-2">
              <li><strong>ImagePullBackOff:</strong> Verify ACR integration with the check-acr command below</li>
              <li><strong>CrashLoopBackOff:</strong> Check logs with <code>kubectl logs</code> and verify environment variables</li>
              <li><strong>Pending Pods:</strong> Check node capacity with <code>kubectl describe nodes</code></li>
            </ul>

            <HighlightCode code={CHECK_ACR_INTEGRATION} language="bash" path=""/>
          </section>

          <h2 className="text-xl mt-6">
            <strong>Ingress Controller Setup</strong>
          </h2>
          <section>
            <div className="mb-3">
              To expose services externally, we&apos;ll install NGINX Ingress Controller. This provides a single entry point
              with routing rules instead of exposing each service individually with LoadBalancer services.
            </div>

            <h3 className="text-lg font-semibold mt-4 mb-2">Install NGINX Ingress</h3>
            <HighlightCode code={INSTALL_NGINX_INGRESS} language="bash" path=""/>
            <div className="mb-3 mt-2">
              Wait for the LoadBalancer IP to be assigned:
            </div>
            <HighlightCode code={GET_INGRESS_IP} language="bash" path=""/>

            <h3 className="text-lg font-semibold mt-6 mb-2">Create Ingress Resource</h3>
            <div className="mb-3">
              Create <code>ingress.yaml</code> in the AKS overlay:
            </div>
            <HighlightCode code={INGRESS_RESOURCE} language="yaml" path=""/>
            <div className="mb-3 mt-2">
              Update the <code>host</code> field with your domain, then add this to your kustomization.yaml under resources section.
              Apply the updated configuration:
            </div>
            <HighlightCode code={APPLY_INGRESS} language="bash" path=""/>
            <div className="mb-3 mt-2">
              Configure your DNS to point to the LoadBalancer IP shown in the ingress output.
            </div>
          </section>

          <h2 className="text-xl mt-6">
            <strong>Production Considerations</strong>
          </h2>
          <section>
            <div className="mb-3">
              Before going to production, consider these additional configurations:
            </div>

            <h3 className="text-lg font-semibold mt-4 mb-2">Security</h3>
            <ul className="list-disc ml-6 py-2 pl-2.5 space-y-2">
              <li><strong>Network Policies:</strong> Restrict pod-to-pod communication with Kubernetes NetworkPolicies</li>
              <li><strong>Pod Security Standards:</strong> Enforce security standards to prevent privileged containers</li>
              <li><strong>Secrets Management:</strong> Use Azure Key Vault integration for sensitive data</li>
              <li><strong>TLS/SSL:</strong> Enable HTTPS with cert-manager and Let&apos;s Encrypt</li>
              <li><strong>RBAC:</strong> Implement fine-grained access control with Azure AD integration</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6 mb-2">Monitoring and Logging</h3>
            <ul className="list-disc ml-6 py-2 pl-2.5 space-y-2">
              <li><strong>Azure Monitor:</strong> Enable Container Insights for cluster and application monitoring</li>
              <li><strong>Log Analytics:</strong> Centralize logs with Azure Log Analytics workspace</li>
              <li><strong>Prometheus/Grafana:</strong> Add metrics collection and dashboards</li>
              <li><strong>Application Insights:</strong> Integrate for distributed tracing</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6 mb-2">Scaling and Performance</h3>
            <ul className="list-disc ml-6 py-2 pl-2.5 space-y-2">
              <li><strong>Horizontal Pod Autoscaler:</strong> Automatically scale pods based on CPU/memory usage</li>
              <li><strong>Cluster Autoscaler:</strong> Automatically scale nodes based on pod demands</li>
              <li><strong>Resource Quotas:</strong> Set namespace-level resource limits</li>
              <li><strong>Pod Disruption Budgets:</strong> Ensure availability during node maintenance</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6 mb-2">Disaster Recovery</h3>
            <ul className="list-disc ml-6 py-2 pl-2.5 space-y-2">
              <li><strong>Backup:</strong> Use Velero for cluster backups and disaster recovery</li>
              <li><strong>Multi-region:</strong> Deploy to multiple regions for high availability</li>
              <li><strong>Health Checks:</strong> Implement liveness and readiness probes</li>
              <li><strong>Rolling Updates:</strong> Configure proper deployment strategies</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6 mb-2">Cost Optimization</h3>
            <ul className="list-disc ml-6 py-2 pl-2.5 space-y-2">
              <li><strong>Node Pools:</strong> Use different VM sizes for different workload types</li>
              <li><strong>Spot Instances:</strong> Leverage Azure Spot VMs for non-critical workloads</li>
              <li><strong>Resource Limits:</strong> Set appropriate requests and limits to avoid over-provisioning</li>
              <li><strong>Azure Cost Management:</strong> Monitor and optimize spending</li>
            </ul>
          </section>

          <h2 className="text-xl mt-6">
            <strong>CI/CD Integration</strong>
          </h2>
          <section>
            <div className="mb-3">
              Automate deployments using Azure Pipelines or GitHub Actions. Here&apos;s a basic GitHub Actions workflow:
            </div>
            <HighlightCode code={GITHUB_ACTIONS_WORKFLOW} language="yaml" path=""/>
            <div className="mb-3 mt-2">
              This workflow builds images on every push to main, tags them with the commit SHA, and deploys to AKS.
            </div>
          </section>

          <h2 className="text-xl mt-6">
            <strong>Cleanup</strong>
          </h2>
          <section>
            <div className="mb-3">
              When you&apos;re done testing, clean up resources to avoid charges:
            </div>
            <HighlightCode code={CLEANUP_RESOURCES} language="bash" path=""/>
          </section>

          <section className="pt-6">
            Congratulations! You&apos;ve successfully deployed your microservices to Azure Kubernetes Service with production-ready configurations.
            You now have experience with Azure Container Registry, managed Kubernetes clusters, Kustomize overlays for multiple environments,
            ingress controllers, and deployment automation.
          </section>

          <section className="pt-4">
            This AKS deployment provides the foundation for a production system. The next steps involve adding monitoring,
            security hardening, disaster recovery planning, and cost optimization based on your specific requirements.
            For questions or feedback about this guide, feel free to leave a comment below.
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
