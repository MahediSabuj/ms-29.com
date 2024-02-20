import ArticleList from "@/components/article-list/article-list";

import { PAGE_TYPE } from "@/types/enum/page-type";
import { IArticleList } from "@/types/article";
import { AEM_DISPATCHER } from "@/lib/data/article/aem/dispatcher";

const articles : IArticleList = {
  articleItems: AEM_DISPATCHER,
  pageType: PAGE_TYPE.APP_PAGE
}

export default function Dispatcher() {
  return (
    <div>
      <ArticleList {...articles}/>
    </div>
  )  
}
