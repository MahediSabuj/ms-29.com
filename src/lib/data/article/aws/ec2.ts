import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const INSTALL_SSL_CERTIFICATE_FROM_PFX_FILE: IArticleItem = {
  title: "Install SSL Certificate from PFX file",
  description: `Installing SSL certificate is crucial for securing websites, ensuring encryption of data transmission between
    users browser and the site to protect sensitive information. Let's explore the process of installing SSL certificate from
    PFX file, providing step-by-step instructions for a seamless setup.`,
  url: "/aws/ec2/install-ssl-certificate-from-pfx-file",
  publishDate: "March 24, 2024",
  modifiedDate: "March 24, 2024",
  views: 128,
  topics: [ TOPICS.AWS_EC2 ],
  active: true
}

export const SETUP_CI_CD_PIPELINE_TO_DEPLOY_NODEJS_APP_TO_AWS_EC2: IArticleItem = {
  title: "Setup CI/CD Pipeline to Deploy Node.js App to AWS EC2",
  description: `In today's fast-paced software development environment, Continuous Integration and Continuous Deployment (CI/CD) 
    pipelines have become essential tools. These pipelines streamline the development process, automate testing, and expedite 
    application deployment, making it faster, more reliable, and less error-prone.`,
  url: "/aws/ec2/setup-ci-cd-pipeline-to-deploy-nodejs-app-to-aws-ec2",
  publishDate: "May 24, 2024",
  modifiedDate: "May 24, 2024",
  topics: [ TOPICS.AWS_EC2 ],
  active: false
}

export const AWS_EC2: IArticleItem[] = [
  INSTALL_SSL_CERTIFICATE_FROM_PFX_FILE,
  SETUP_CI_CD_PIPELINE_TO_DEPLOY_NODEJS_APP_TO_AWS_EC2
].filter(m => m.active);
