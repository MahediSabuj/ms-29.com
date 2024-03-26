import ArticleList from "@/components/article-list/article-list";

import { PAGE_TYPE } from "@/types/enum/page-type";
import { IArticleList } from "@/types/article";
import { AEM_WORKFLOW } from "@/lib/data/article/aem/workflow";

const articles : IArticleList = {
  articleItems: AEM_WORKFLOW,
  pageType: PAGE_TYPE.APP_PAGE
}

export default function Workflow() {
  return (
    <div>
      <ArticleList {...articles}/>
    </div>
  )
}
