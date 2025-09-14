import { Metadata } from "next";
import Link from "next/link";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import Highlight from "@/components/highlight/highlight";
import TOPICS from "@/lib/data/article/topics";
import ArticleReviewList from "@/components/article-review-list/article-review-list";
import ArticleReviewForm from "@/components/form/article-review/article-review";

import { DEVELOPMENT_USING_CLAUDE_CODE as ARTICLE } from "@/lib/data/article/ai/coding-assistant";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: TOPICS.CODING_ASSISTANT.title,
    url: TOPICS.CODING_ASSISTANT.url
  }],
  current: ARTICLE.title
}

export default function ClaudeCode() {
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
            As AI Coding Assistant tools are evolving rapidly, We&apos;ve been experimenting with different AI-powered development
            tools like GitHub Copilot, Cursor, Claude Code, and others from a development perspective. Recently, I&apos;ve spent the
            last 2 months diving deep into Claude Code specifically.
          </section>
          <section className="pt-4">
            Different teams and developers are using these tools in various ways, and I wanted to share some insights from our journey.
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
