import ArticleList from "@/components/article-list/article-list";
import { IArticleList } from "@/types/article";
import { AEM_FORMS } from "@/lib/data/article/aem/forms";

const articles : IArticleList = {
  articleItems: AEM_FORMS
};

export default function Forms() {
  return (
    <div>
      <ArticleList {...articles}/>
    </div>
  )
}
