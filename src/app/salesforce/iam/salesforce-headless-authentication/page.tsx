import Article from "@/components/article/article";
import { SALESFORCE_HEADLESS_AUTHENTICATION as ARTICLE } from "@/lib/data/article/salesforce/iam";

export default function HeadlessAuthentication() {
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
