import Article from "@/components/article/article";
import { CUSTOM_LIGHTNING_WEB_COMPONENT as ARTICLE } from "@/lib/data/article/salesforce/lwc";

export default function LightningWebComponent() {
  return (
    <div>
      <article itemScope itemType="https://schema.org/Article">
        <Article
          title={ARTICLE.title}
          url={ARTICLE.url}
          publishDate={ARTICLE.publishDate}
          modifiedDate={ARTICLE.modifiedDate}/>
      </article>
    </div>
  );
}
