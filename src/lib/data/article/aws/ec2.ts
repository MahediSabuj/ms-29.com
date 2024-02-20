import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const INSTALL_SSL_CERTIFICATE_FROM_PFX_FILE: IArticleItem = {
  title: "Install SSL Certificate from PFX file",
  description: ``,
  url: "/aws/ec2/install-ssl-certificate-from-pfx-file",
  publishDate: "February 20, 2024",
  modifiedDate: "February 20, 2024",
  topics: [ TOPICS.AWS_EC2 ]
}

export const AWS_EC2: IArticleItem[] = [
  INSTALL_SSL_CERTIFICATE_FROM_PFX_FILE
]
