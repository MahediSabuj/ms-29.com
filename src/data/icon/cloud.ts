import { IconItem } from "@/types/icon";

import awsIcon from "@/assets/icon/cloud/aws.png";
import gcpIcon from "@/assets/icon/cloud/gcp.png";
import azureIcon from "@/assets/icon/cloud/azure.png";

const AWS : IconItem = {
  name: "AWS",
  category: "Cloud Providers",
  filename: "aws.png",
  description: "Amazon Web Services cloud platform",
  tags: ["cloud", "aws", "amazon"],
  hasImage: true,
  imageSrc: awsIcon
}

const GCP : IconItem = {
  name: "Google Cloud",
  category: "Cloud Providers", 
  filename: "gcp.png",
  description: "Google Cloud Platform",
  tags: ["cloud", "google", "gcp"],
  hasImage: true,
  imageSrc: gcpIcon
}

const AZURE : IconItem = {
  name: "Azure",
  category: "Cloud Providers",
  filename: "azure.png", 
  description: "Microsoft Azure cloud platform",
  tags: ["cloud", "microsoft", "azure"],
  hasImage: true,
  imageSrc: azureIcon
}

export const CLOUD = [
  AWS,
  GCP,
  AZURE
];
