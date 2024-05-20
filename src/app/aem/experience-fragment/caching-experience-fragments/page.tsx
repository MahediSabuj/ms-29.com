import { Metadata } from "next";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { CACHING_EXPERIENCE_FRAGMENTS as ARTICLE } from "@/lib/data/article/aem/experience-fragment";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: "Experience Fragment",
    url: "/aem/experience-fragment"
  }],
  current: ARTICLE.title
}

export default function CachingExperienceFragment() {
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
            Experience Fragments (XF) often face cache invalidation issues, where modifying and publishing an XF does not update 
            the pages referencing it because the XF content is cached within each individual page rather than a shared repository. 
            As a result, authors have to manually activate or invalidate each page to see the updated XF content, making the process tedious and impractical.
          </section>
        </div>
      </article>
    </div>
  );
}
