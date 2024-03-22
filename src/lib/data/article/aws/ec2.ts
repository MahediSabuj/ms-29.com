import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const INSTALL_SSL_CERTIFICATE_FROM_PFX_FILE: IArticleItem = {
  title: "Install SSL Certificate from PFX file",
  description: `Installing SSL certificate is crucial for securing websites, ensuring encryption of data transmission between
    users browser and the site to protect sensitive information. Let's explore the process of installing SSL certificate from
    PFX file, providing step-by-step instructions for a seamless setup.`,
  url: "/aws/ec2/install-ssl-certificate-from-pfx-file",
  publishDate: "March 23, 2024",
  modifiedDate: "March 23, 2024",
  topics: [ TOPICS.AWS_EC2 ],
  active: true
}

export const AWS_EC2: IArticleItem[] = [
  INSTALL_SSL_CERTIFICATE_FROM_PFX_FILE
].filter(m => m.active);
