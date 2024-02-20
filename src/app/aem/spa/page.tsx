import ArticleList from "@/components/article-list/article-list";

import { PAGE_TYPE } from "@/types/enum/page-type";
import { IArticleList } from "@/types/article";
import { AEM_SPA } from "@/lib/data/article/aem/spa";

const articles : IArticleList = {
  articleItems: AEM_SPA,
  pageType: PAGE_TYPE.APP_PAGE
}

export default function SPA() {
  return (
    <div>
      <ArticleList {...articles}/>
    </div>
  )  
}
