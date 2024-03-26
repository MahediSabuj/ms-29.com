import Article from "@/components/article/article";
import { CROSS_CHANNEL_CONTENT_DELIVERY as ARTICLE } from "@/lib/data/article/aem/content-fragment";

export default function CrossChannelDelivery() {
  return (
    <div>
      <article itemScope itemType="https://schema.org/Article">
        <Article
          title={ARTICLE.title}
          publishDate={ARTICLE.publishDate}
          modifiedDate={ARTICLE.modifiedDate}/>
      </article>
    </div>
  );
}
