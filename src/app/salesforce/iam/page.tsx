import ArticleList from "@/components/article-list/article-list";
import { PAGE_TYPE } from "@/types/enum/page-type";
import { IArticleList } from "@/types/article";
import { SF_IAM } from "@/lib/data/article/salesforce/iam";

const articles : IArticleList = {
  articleItems: SF_IAM,
  pageType: PAGE_TYPE.APP_PAGE
}

export default function IAM() {
  return (
    <div>
      <ArticleList {...articles}/>
    </div>
  )  
}
