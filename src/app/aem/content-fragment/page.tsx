import ArticleList from "@/components/article-list/article-list";
import { IArticleList } from "@/types/article";
import { CONTENT_FRAGMENT } from "@/lib/data/article/aem/content-fragment";
import { PAGE_TYPE } from "@/types/enum/page-type";

const articles : IArticleList = {
  articleItems: CONTENT_FRAGMENT,
  pageType: PAGE_TYPE.APP_PAGE
}

export default function ContentFragment() {
  return (
    <div>
      <ArticleList {...articles}/>
    </div>
  )
}