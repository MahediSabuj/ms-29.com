import { Metadata } from "next";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { MOCK_STATIC_METHODS_MOCKITO as ARTICLE } from "@/lib/data/article/aem/code-coverage";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: "Code Coverage",
    url: "/aem/code-coverage"
  }],
  current: ARTICLE.title
}

export default function MockStaticMethod() {
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
            In the pursuit of clean object-oriented code, the need to mock static methods may suggest design flaws or code smells, 
            prompting consideration for refactoring. Nevertheless, there are situations where mocking static methods remains crucial 
            despite refactoring efforts.
          </section>
        </div>
      </article>
    </div>
  );
}
