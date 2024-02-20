import ArticleList from "@/components/article-list/article-list";
import { PAGE_TYPE } from "@/types/enum/page-type";
import { IArticleList } from "@/types/article";
import { CODE_COVERAGE } from "@/lib/data/article/aem/code-coverage";

const articles : IArticleList = {
  articleItems: CODE_COVERAGE,
  pageType: PAGE_TYPE.APP_PAGE
}

export default function CodeCoverage() {
  return (
    <div>
      <ArticleList {...articles}/>
    </div>
  )  
}
