import { IArticleItem } from "@/types/article";
import TOPICS from "@/data/article/topics";

export const DEPLOY_STATIC_WEBSITES_ON_AWS_S3_USING_CLOUDFRONT: IArticleItem = {
  title: "Deploy Static Websites on AWS S3 using CloudFront",
  description: ``,
  url: "/aws/s3/deploy-static-websites-on-aws-s3-using-cloudfront",
  publishDate: "October 17, 2025",
  modifiedDate: "October 17, 2025",
  topics: [ TOPICS.AWS_S3 ],
  active: true
}

export const AWS_S3: IArticleItem[] = [
  DEPLOY_STATIC_WEBSITES_ON_AWS_S3_USING_CLOUDFRONT
].filter(m => m.active);
