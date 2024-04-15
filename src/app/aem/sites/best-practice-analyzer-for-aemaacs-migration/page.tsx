import { Metadata } from "next";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { BEST_PRACTICE_ANALYSIS_FOR_AEMAACS_MIGRATION as ARTICLE } from "@/lib/data/article/aem/sites";

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

export default function BestPracticeAnalysis() {
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
            Best Practices Analyzer (BPA) evaluates the current AEM implementation, identifying areas not in alignment 
            with AEM best practices and offering guidance on how to improve. It also expedites the assessment of readiness 
            for transitioning from an existing Adobe Experience Manager (AEM) deployment to AEM as a Cloud Service. This tool 
            generates a report pinpointing potential areas for refactoring, marking the initial phase of migrating to AEM as a Cloud Service.
          </section>
        </div>  
      </article>
    </div>
  );
}
