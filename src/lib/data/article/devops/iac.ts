import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const INSTALL_AND_CONFIGURE_TERRAFORM: IArticleItem = {
  title: "Install and Configure Terraform to Provision AWS Resources",
  description: ``,
  url: `${TOPICS.IAC.url}/install-and-confiure-terraform-to-provision-aws-resource`,
  publishDate: "April 22, 2025",
  modifiedDate: "April 22, 2025",
  topics: [ TOPICS.IAC ],
  active: false
}

export const IAC: IArticleItem[] = [
  INSTALL_AND_CONFIGURE_TERRAFORM
].filter(m => m.active);
