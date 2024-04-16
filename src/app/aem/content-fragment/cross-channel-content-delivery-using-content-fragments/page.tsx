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
        <div>
          <section className="pt-6">
            In the modern era,  users often interact across multiple channels, spanning from websites to mobile apps. 
            Streamlining content management and delivery from a centralized platform can simplify this process. Content Fragments, 
            independent of layout, have the capability to deliver content to AEM Sites using Core Component or distribute it to 
            downstream channels in a headless manner through GraphQL.
          </section>
        </div>
      </article>
    </div>
  );
}
