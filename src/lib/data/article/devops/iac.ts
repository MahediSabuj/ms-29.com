import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const INSTALL_AND_CONFIGURE_TERRAFORM: IArticleItem = {
  title: "Install and Configure Terraform to Provision AWS Resources",
  description: `Infrastructure as Code (IaC) helps automate cloud resource setup, one of the leading tools in the IaC space is Terraform 
    by HashiCorp.`,
  url: `${TOPICS.IAC.url}/install-and-confiure-terraform-to-provision-aws-resource`,
  publishDate: "April 17, 2025",
  modifiedDate: "April 17, 2025",
  topics: [ TOPICS.IAC ],
  active: false
}

export const IAC: IArticleItem[] = [
  INSTALL_AND_CONFIGURE_TERRAFORM
].filter(m => m.active);
