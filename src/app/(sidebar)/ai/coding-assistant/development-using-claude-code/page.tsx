import { Metadata } from "next";
import Link from "next/link";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import Highlight from "@/components/highlight/highlight";
import TOPICS from "@/data/article/topics";
import ArticleReviewList from "@/components/article-review-list/article-review-list";
import ArticleReviewForm from "@/components/form/article-review/article-review";

import { DEVELOPMENT_USING_CLAUDE_CODE as ARTICLE } from "@/data/article/ai/coding-assistant";

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
            As AI Coding Assistant tools are evolving rapidly, we&apos;ve been experimenting with different AI-powered development
            tools like GitHub Copilot, Cursor, Claude Code, and others from a development perspective. Recently, I&apos;ve spent the
            last 2 months diving deep into Claude Code specifically.
          </section>
          <section className="pt-4">
            Different teams and developers are using these tools in various ways, and I wanted to share some insights from our journey.
          </section>
          <section className="pt-4">
            Claude can be used in multiple ways.
            <ul className="list-decimal ml-6 pt-1 pb-2 pl-2.5">
              <li className="mt-2">
                <strong>Web Interface (Claude.ai)</strong>: Web based chat interface for interactive conversations with Claude. No
                installation required and offers both free usage and paid subscription options.
              </li>
              <li className="mt-2">
                <strong>Command Line (Claude Code)</strong>: Terminal based tool for agentic coding and development workflows. Requires paid subscription.
              </li>
              <li className="mt-2">
                <strong>API Integration (Anthropic Console)</strong>: Programmatic access to Claude AI model APIs for custom applications and integrations. Requires paid subscription.
              </li>
            </ul>
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
