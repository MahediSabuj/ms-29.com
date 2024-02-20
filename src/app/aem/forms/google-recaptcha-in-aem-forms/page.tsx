import Article from "@/components/article/article";
import { GOOGLE_RECAPTCHA_AEM_FORMS as ARTICLE } from "@/lib/data/article/aem/forms";

export default function GoogleRecaptcha() {
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
