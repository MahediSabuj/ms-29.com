import ArticleList from "@/components/article-list/article-list";

import { PAGE_TYPE } from "@/types/enum/page-type";
import { IArticleList } from "@/types/article";
import { AEM_SITES } from "@/lib/data/article/aem/sites";

const articles : IArticleList = {
  articleItems: AEM_SITES,
  pageType: PAGE_TYPE.APP_PAGE
}

export default function Sites() {
  return (
    <div>
      <ArticleList {...articles}/>
    </div>
  )  
}
