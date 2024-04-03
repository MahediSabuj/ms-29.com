import ArticleList from "@/components/article-list/article-list";
import { IArticleList } from "@/types/article";
import { CONTENT_FRAGMENT } from "@/lib/data/article/aem/content-fragment";
import { PAGE_TYPE } from "@/types/enum/page-type";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";

const articles : IArticleList = {
  articleItems: CONTENT_FRAGMENT,
  pageType: PAGE_TYPE.APP_PAGE
}

const breadcrumbs : IBreadCrumb = {
  items: [],
  current: "Content Fragment"
}

export default function ContentFragment() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <ArticleList {...articles}/>
    </div>
  )
}