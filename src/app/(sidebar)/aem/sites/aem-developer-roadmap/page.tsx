import { Metadata } from "next";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import ArticleReviewList from "@/components/article-review-list/article-review-list";
import ArticleReviewForm from "@/components/form/article-review/article-review";

import { AEM_DEVELOPER_ROADMAP as ARTICLE } from "@/data/article/aem/sites";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: "AEM Sites",
    url: "/aem/sites"
  }],
  current: ARTICLE.title
}

export default function AEMRoadMap() {
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
            AEM has extensive documentation, but it is scattered across different places. When I began AEM development in 2018, and even today when 
            new developers join our team, they face the same challenge. In this article, I&apos;ll provide a comprehensive roadmap for AEM developers, 
            covering from basics to advanced level, including integration with other Adobe services.
          </section>
          <h2 className="text-xl mt-6">
            <strong>Foundation Prerequisites</strong>
          </h2>
          <section className="pt-4">
            Before diving into AEM development, you need a solid foundation in core technologies:
            <ul className="list-decimal ml-6 pt-1 pb-2 pl-2.5">
              <li><strong>Java Fundamentals</strong>
                <ul className="list-disc ml-6 pt-1 pb-2 pl-2.5">
                  <li><strong>Core Java</strong> OOP concepts, Collections, Exception Handling, Multithreading</li>
                  <li><strong>Java 11+</strong> Lambda expressions, Streams API, Optional</li>
                  <li><strong>Design Patterns</strong> Singleton, Factory, Builder, Adapter, Decorator</li>
                  <li><strong>Maven</strong> Dependency management, build lifecycle, POM structure</li>
                  <li><strong>JUnit/Mockito</strong> Unit testing and mocking frameworks</li>
                </ul>
              </li>
              <li>Web Technologies</li>
              <li>Frontend Build Tools</li>
              <li><strong>Version Control</strong>
                <ul className="list-disc ml-6 pt-1 pb-2 pl-2.5">
                  <li><strong>Git</strong> Branching strategies, merging, rebasing</li>
                  <li><strong>GitHub/GitLab/Bitbucket</strong> Pull requests, code reviews</li>
                </ul>
              </li>
              <li>RESTful APIs</li>
            </ul>
          </section>
          <h2 className="text-xl mt-6">
            <strong>AEM Basics</strong>
          </h2>
        </div>  
      </article>
      <div className="mt-8 mb-4">
        <ArticleReviewList items={[]}/>
        <ArticleReviewForm/>
      </div>
    </div>
  );
}
