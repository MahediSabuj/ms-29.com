import { IconItem } from "@/types/icon";

import route53Icon from "@/assets/icon/aws/route-53.png";
import amplifyIcon from "@/assets/icon/aws/amplify.png";
import apiGatewayIcon from "@/assets/icon/aws/api-gateway.png";
import loadBalancerIcon from "@/assets/icon/aws/load-balancer.png";
import kubernetesIcon from "@/assets/icon/aws/kubernetes.png";
import bastionHostIcon from "@/assets/icon/aws/bastion-host.png";
import rdsIcon from "@/assets/icon/aws/rds.png";
import s3Icon from "@/assets/icon/aws/s3.png";
import cloudfrontIcon from "@/assets/icon/aws/cloudfront.png";
import sesIcon from "@/assets/icon/aws/ses.png";
import systemsManagerIcon from "@/assets/icon/aws/systems-manager.png";

const ROUTE_53 : IconItem = {
  name: "Route 53",
  category: "AWS",
  filename: "route-53.png",
  description: "Amazon Route 53 DNS service",
  tags: ["aws", "dns", "route53", "domain", "networking"],
  hasImage: true,
  imageSrc: route53Icon
}

const AMPLIFY : IconItem = {
  name: "Amplify",
  category: "AWS",
  filename: "amplify.png",
  description: "AWS Amplify full-stack development platform",
  tags: ["aws", "amplify", "frontend", "fullstack", "hosting", "serverless"],
  hasImage: true,
  imageSrc: amplifyIcon
}

const API_GATEWAY : IconItem = {
  name: "API Gateway",
  category: "AWS",
  filename: "api-gateway.png",
  description: "Amazon API Gateway for creating and managing APIs",
  tags: ["aws", "api", "gateway", "rest", "serverless", "microservices"],
  hasImage: true,
  imageSrc: apiGatewayIcon
}

const ELASTIC_LOAD_BALANCER : IconItem = {
  name: "Elastic Load Balancer",
  category: "AWS",
  filename: "load-balancer.png",
  description: "Amazon Elastic Load Balancer for distributing traffic",
  tags: ["aws", "elb", "load", "balancer", "traffic", "distribution", "networking"],
  hasImage: true,
  imageSrc: loadBalancerIcon
}

const ELASTIC_KUBERNETES_SERVICE : IconItem = {
  name: "Elastic Kubernetes Service",
  category: "AWS",
  filename: "kubernetes.png",
  description: "Amazon EKS managed Kubernetes service",
  tags: ["aws", "eks", "kubernetes", "containers", "orchestration", "microservices"],
  hasImage: true,
  imageSrc: kubernetesIcon
}

const BASTION_HOST : IconItem = {
  name: "Bastion Host",
  category: "AWS",
  filename: "bastion-host.png",
  description: "AWS Bastion Host for secure access to private resources",
  tags: ["aws", "bastion", "host", "security", "ssh", "access", "private"],
  hasImage: true,
  imageSrc: bastionHostIcon
}

const RDS : IconItem = {
  name: "RDS",
  category: "AWS",
  filename: "rds.png",
  description: "Amazon Relational Database Service",
  tags: ["aws", "rds", "database", "relational", "mysql", "postgres", "sql"],
  hasImage: true,
  imageSrc: rdsIcon
}

const S3 : IconItem = {
  name: "S3",
  category: "AWS",
  filename: "s3.png",
  description: "Amazon Simple Storage Service",
  tags: ["aws", "s3", "storage", "bucket", "object", "file"],
  hasImage: true,
  imageSrc: s3Icon
}

const CLOUDFRONT : IconItem = {
  name: "CloudFront",
  category: "AWS",
  filename: "cloudfront.png",
  description: "Amazon CloudFront CDN service",
  tags: ["aws", "cloudfront", "cdn", "distribution", "cache", "edge"],
  hasImage: true,
  imageSrc: cloudfrontIcon
}

const SES : IconItem = {
  name: "SES",
  category: "AWS",
  filename: "ses.png",
  description: "Amazon Simple Email Service",
  tags: ["aws", "ses", "email", "smtp", "mail", "messaging"],
  hasImage: true,
  imageSrc: sesIcon
}

const SYSTEMS_MANAGER : IconItem = {
  name: "Systems Manager",
  category: "AWS",
  filename: "systems-manager.png",
  description: "AWS Systems Manager for secure server access",
  tags: ["aws", "ssm", "systems", "manager", "automation", "patching", "parameter", "server", "access"],
  hasImage: true,
  imageSrc: systemsManagerIcon
}

export const AWS_SERVICES = [
  AMPLIFY,
  API_GATEWAY,
  BASTION_HOST,
  CLOUDFRONT,
  ELASTIC_KUBERNETES_SERVICE,
  ELASTIC_LOAD_BALANCER,
  RDS,
  ROUTE_53,
  S3,
  SES,
  SYSTEMS_MANAGER
];