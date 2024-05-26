import { Metadata } from "next";
import Link from "next/link";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { CONTENT_FRAGMENTS_VS_EXPERIENCE_FRAGMENTS as ARTICLE } from "@/lib/data/article/aem/content-fragment";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: "Content Fragment",
    url: "/aem/content-fragment"
  }],
  current: ARTICLE.title
}

export default function CFvsXF() {
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
            Adobe Experience Manager (AEM) provides powerful tools for managing and delivering content efficiently. Two essential 
            components in AEM are Content Fragments (CF) and Experience Fragments (XF). While both are used to create reusable content, 
            each serves a distinct purpose and offers unique capabilities.
          </section>
          <h2 id="content-fragments" className="text-xl mt-4">
            <strong>Content Fragments</strong>
          </h2>
          <div>
            Content Fragments are structured content based on a Content Fragment Model (CFM) and implemented as <strong className="text-sm">dam:Asset</strong>. 
            In the database paradigm, CFM acts as a table, while CFs play the role of rows.
          </div>
          <div className="pt-3">
            Content Fragments can be delivered across channels using the AEM Headless GraphQL API and can also be used in AEM Sites 
            or Experience Fragments through the <Link className="text-blue-600" target="_blank" href="https://github.com/adobe/aem-core-wcm-components/tree/main/content/src/content/jcr_root/apps/core/wcm/components/contentfragment/v1/contentfragment">AEM Core Content Fragment Component</Link>. It is content-centric, allowing AEM itself and 
            third-party channels to adjust the design and layout according on their requirements.
          </div>
          <div className="pt-3">
            MSM&apos;s standard rollout config does not update Content Fragment references to match the locale-specific paths in the live copy, 
            resulting in references still pointing to the original source.
          </div>
          <h2 id="experience-fragments" className="text-xl mt-4">
            <strong>Experience Fragments</strong>
          </h2>
          <div>
            Experience Fragments are comprised of one or more AEM Components, enabling content authors to reuse the same content across 
            multiple pages within AEM Sites or other Experience Fragments.
          </div>
          <div className="pt-3">
            Using the <Link className="text-blue-600" target="_blank" href="https://github.com/adobe/aem-core-wcm-components/tree/main/content/src/content/jcr_root/apps/core/wcm/components/experiencefragment/v1/experiencefragment">AEM Core Experience Fragment Component</Link>, localized experience fragments can be rendered according to the current page&apos;s 
            localization if component is configured in template and experience fragments are created following the specified <strong className="text-sm">fragmentVariationPath</strong> pattern.
            This is particularly useful for managing the headers and footers of AEM pages.
          </div>
          <div className="pt-3">
            Experience Fragments have the capability to be exported to Adobe Target. Subsequently, they can used as offers in Target activities, and personalize experiences at scale.
          </div>
        </div>
      </article>
    </div>
  );
}
