import Article from "@/components/article/article";
import { UNUSED_ASSET_CLEANUP as ARTICLE } from "@/lib/data/article/aem/assets";

export default function UnusedAssetCleanup() {
  return (
    <div>
      <article itemScope itemType="https://schema.org/Article">
        <Article
          title={ARTICLE.title}
          publishDate={ARTICLE.publishDate}
          modifiedDate={ARTICLE.modifiedDate}/>
        <div>
          <section className="pt-6">
            In asset management, it becomes apparent that certain assets are no longer referenced with any pages. It&apos;s recommended 
            to delete these unused images from the asset repository. This not only decreases the size of the AEM instance but also 
            improves search/query performance.
          </section>
        </div>  
      </article>
    </div>
  );
}
