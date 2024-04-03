import ArticleList from "@/components/article-list/article-list";
import { IArticleList } from "@/types/article";
import { AEM_FORMS } from "@/lib/data/article/aem/forms";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";

const articles : IArticleList = {
  articleItems: AEM_FORMS
};

const breadcrumbs : IBreadCrumb = {
  items: [],
  current: "AEM Forms"
}

export default function Forms() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <ArticleList {...articles}/>
    </div>
  )
}
