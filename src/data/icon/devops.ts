import { IconItem } from "@/types/icon";

import dockerIcon from "@/assets/icon/devops/docker.png";
import kubernetesIcon from "@/assets/icon/devops/kubernetes.png";
import terraformIcon from "@/assets/icon/devops/terraform.png";
import githubActionsIcon from "@/assets/icon/devops/github-actions.png";

const DOCKER : IconItem = {
  name: "Docker",
  category: "DevOps Tools",
  filename: "docker.png",
  description: "Container platform",
  tags: ["container", "docker", "devops"],
  hasImage: true,
  imageSrc: dockerIcon
}

const KUBERNETES : IconItem = {
  name: "Kubernetes",
  category: "DevOps Tools",
  filename: "kubernetes.png",
  description: "Container orchestration platform",
  tags: ["container", "orchestration", "k8s"],
  hasImage: true,
  imageSrc: kubernetesIcon
}

const TERRAFORM : IconItem = {
  name: "Terraform",
  category: "DevOps Tools",
  filename: "terraform.png",
  description: "Infrastructure as Code tool",
  tags: ["terraform", "iac", "infrastructure", "devops", "hashicorp"],
  hasImage: true,
  imageSrc: terraformIcon
}

const GITHUB_ACTIONS : IconItem = {
  name: "GitHub Actions",
  category: "DevOps Tools",
  filename: "github-actions.png",
  description: "CI/CD automation platform",
  tags: ["github", "actions", "ci", "cd", "automation", "devops", "workflows"],
  hasImage: true,
  imageSrc: githubActionsIcon
}

export const DEVOPS = [
  DOCKER,
  KUBERNETES,
  TERRAFORM,
  GITHUB_ACTIONS
];
