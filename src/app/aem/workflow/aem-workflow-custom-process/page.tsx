import { Metadata } from "next";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { CUSTOM_AEM_WORKFLOW_PROCESS as ARTICLE } from "@/lib/data/article/aem/workflow";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: "AEM Workflow",
    url: "/aem/workflow"
  }],
  current: ARTICLE.title
}

export default function CustomWorkflowProcess() {
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
            AEM provides a set of pre-defined workflow process that cover common scenarios, but sometimes 
            these built-in features may not fully handle the complexities of specific workflows. In such cases, AEM allows 
            developers to create custom processes, enhancing the functionality of standard workflows to meet unique requirements.
          </section>
        </div>  
      </article>
    </div>
  );
}
