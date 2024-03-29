import Article from "@/components/article/article";
import { BEST_PRACTICE_ANALYSIS_FOR_AEMAACS_MIGRATION as ARTICLE } from "@/lib/data/article/aem/sites";

export default function BestPracticeAnalysis() {
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
