import { Metadata } from "next";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { DISPATCHER_CACHE_FLUSH_STRATEGIES as ARTICLE } from "@/lib/data/article/aem/dispatcher";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: "AEM Dispatcher",
    url: "/aem/dispatcher"
  }],
  current: ARTICLE.title
}

export default function DispatcherCache() {
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
            When caching is implemented for your website, it&apos;s essential to clear the dispatcher cache after publishing pages 
            to ensure the most recent content is displayed to end users. Once the cache is cleared, the dispatcher forwards the next 
            request to the publisher to generate recent content, which is then added to the dispatcher cache. Subsequent requests are 
            delivered from the dispatcher cache.
          </section>
        </div>  
      </article>
    </div>
  );
}
