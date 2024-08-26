import { Metadata } from "next";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { MULTI_SITE_MANAGER as ARTICLE } from "@/lib/data/article/aem/sites";

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

export default function MultiSiteManager() {
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
            Multi Site Manager and its Live Copy features allow to use the same site content in multiple locations. MSM maintains 
            the live relationship between the source and its live copies, ensuring that changes made to the source are also reflected 
            in the live copies. Additionally, You can adjust the content of the live copies by disconnecting the live relationship for
            individual subpages, or components, or both. By doing this, changes to the source are no longer applied to the live copy.
          </section>
        </div>  
      </article>
    </div>
  );
}
