import Article from "@/components/article/article";
import { WEB_OPTIMIZED_IMAGE_DELIVERY_FOR_CUSTOM_COMPONENTS as ARTICLE } from "@/lib/data/article/aem/sites";

export default function WebOptimizedImageDelivery() {
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
