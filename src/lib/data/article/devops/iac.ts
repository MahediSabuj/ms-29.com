import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const INSTALL_AND_CONFIGURE_TERRAFORM: IArticleItem = {
  title: "Install and Configure Terraform to Provision AWS Resources",
  description: `Infrastructure as Code (IaC) is changing how teams build and manage cloud infrastructure by turning manual processes into code. 
    Terraform, developed by HashiCorp, is one of the most popular tools in the IaC space. It allows you to define and provision infrastructure 
    using a declarative configuration language and supports a wide range of cloud providers, including AWS, Azure, and Google Cloud.`,
  url: `${TOPICS.IAC.url}/install-and-confiure-terraform-to-provision-aws-resource`,
  publishDate: "April 24, 2025",
  modifiedDate: "April 24, 2025",
  topics: [ TOPICS.IAC ],
  active: true
}

export const IAC: IArticleItem[] = [
  INSTALL_AND_CONFIGURE_TERRAFORM
].filter(m => m.active);
