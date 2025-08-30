import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const SETUP_COGNITO_FOR_SPA: IArticleItem = {
  title: "AWS Cognito User Pool Setup for SPA",
  description: `Amazon Cognito User Pool delivers authentication, authorization, and user management capabilities for web and 
    mobile applications. This guide demonstrates how to configure a comprehensive Cognito User Pool for a Single Page 
    Application (SPA), covering user registration, sign-in functionality, custom attributes, and email verification processes.`,
  url: "/aws/cognito/setup-cognito-user-pool-for-spa",
  publishDate: "August 30, 2025",
  modifiedDate: "August 30, 2025",
  topics: [ TOPICS.AWS_COGNITO ],
  active: true
}

export const AWS_COGNITO: IArticleItem[] = [
  SETUP_COGNITO_FOR_SPA
].filter(m => m.active);
