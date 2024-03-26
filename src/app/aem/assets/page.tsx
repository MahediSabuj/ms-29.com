import ArticleList from "@/components/article-list/article-list";
import { PAGE_TYPE } from "@/types/enum/page-type";
import { IArticleList } from "@/types/article";
import { AEM_ASSETS } from "@/lib/data/article/aem/assets";

const articles : IArticleList = {
  articleItems: AEM_ASSETS,
  pageType: PAGE_TYPE.APP_PAGE
}

export default function Assets() {
  return (
    <div>
      <ArticleList {...articles}/>
    </div>
  )
}
