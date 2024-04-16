import Article from "@/components/article/article";
import { SAML_AUTHENTICATION as ARTICLE } from "@/lib/data/article/aem/sites";

export default function SamlAuthentication() {
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