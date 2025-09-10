import Article from "@/components/article/article";
import { CUSTOM_AEM_WORKFLOW_STEP as ARTICLE } from "@/lib/data/article/aem/workflow";

export default function CustomWorkflowStep() {
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
