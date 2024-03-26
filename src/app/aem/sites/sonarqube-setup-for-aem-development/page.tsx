import Article from "@/components/article/article";
import { SONARQUBE_SETUP_FOR_AEM_DEVELOPMENT as ARTICLE } from "@/lib/data/article/aem/sites";

export default function SonarQubeSetup() {
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
