import { Metadata } from "next";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/lib/data/article/topics";
import { CUSTOM_RUN_MODES_ON_AEMAACS as ARTICLE } from "@/lib/data/article/aem/cloud";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: TOPICS.AEM_CLOUD.title,
    url: TOPICS.AEM_CLOUD.url
  }],
  current: ARTICLE.title
}

export default function CustomRunModes() {
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
            In AEM 6.5, you can define arbitrary run modes to apply OSGi configurations to specific instances. However, in AEMaaCS, the platform supports a fixed
            set of predefined run modes. While custom run modes cannot be created in AEMaaCS, you can still achieve similar functionality using alternative approaches.
            In this article, we will explore the changes in run modes in AEMaaCS and discuss how to adapt your custom run modes for use in AEMaaCS.
          </section>
          <h2 className="text-xl mt-4">
            <strong>Changes in Run Modes on AEMaaCS</strong>
          </h2>
          <section>
            <ul className="list-disc ml-6 pt-1 pl-2.5">
              <li>
                <strong>Predefined Run Modes:</strong> Environments are standardized with predefined set: <strong>RDE</strong>, <strong>Dev</strong>, <strong>Stage</strong>, and <strong>Prod</strong>.
                Each environment consists of <strong>Author</strong>, <strong>Publish</strong>, and <strong>Preview</strong> service.
              </li>
              <li>
                <strong>SlingSettingsService:</strong> The <code className="code-inline">getRunModes()</code> method returns either &quot;author&quot; or &quot;publish&quot;, depending on the instance type.
                However, it does not indicate the specific environment, such as Dev, Stage, or Prod.
              </li>
              <li>
                <strong>Preview Environment: </strong> AEMaaCS provides Preview service, allows previewing the final website experience before content is published and made publicly available.
              </li>
            </ul>
          </section>
        </div>
      </article>
    </div>
);
}
