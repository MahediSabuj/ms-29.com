import Article from "@/components/article/article";
import { CUSTOM_AEM_WORKFLOW_PROCESS as ARTICLE } from "@/lib/data/article/aem/workflow";

export default function CustomWorkflowProcess() {
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
