import { IconItem } from "@/types/icon";

import dockerIcon from "@/assets/icon/devops/docker.png";
import kubernetesIcon from "@/assets/icon/devops/kubernetes.png";

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

export const DEVOPS = [
  DOCKER,
  KUBERNETES
];
