import { Metadata } from "next";
import Link from "next/link";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/data/article/topics";
import ArticleReviewList from '@/components/article-review-list/article-review-list';
import ArticleReviewForm from "@/components/form/article-review/article-review";
import HighlightCode from "@/components/highlight/highlight";

import { DEPLOY_STATIC_WEBSITES_ON_AWS_S3_USING_CLOUDFRONT as ARTICLE } from "@/data/article/aws/s3";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: TOPICS.AWS_S3.title,
    url: TOPICS.AWS_S3.url
  }],
  current: ARTICLE.title
}

export default function StaticWebSites() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <article itemScope itemType="https://schema.org/Article">
        <Article
          title={ARTICLE.title}
          publishDate={ARTICLE.publishDate}
          modifiedDate={ARTICLE.modifiedDate}/>
        <div>
          <section className="pt-6">

          </section>
        </div>
      </article>
      <div className="mt-8 mb-4">
        <ArticleReviewList items={[]}/>
        <ArticleReviewForm/>
      </div>
    </div>
  );
}
