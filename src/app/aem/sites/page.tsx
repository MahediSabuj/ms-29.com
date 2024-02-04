import ArticleList from "@/components/article-list/article-list"

import { IArticleList } from "@/types/article"

const articles : IArticleList = {
  articleItems: [{
    title: "Setting Default Values in AEM Component Dialog",
    url: "/aem/sites/default-value-in-component-dialog"
  }]
}

export default function Sites() {
  return (
    <div>
      <ArticleList {...articles}/>
    </div>
  )  
}
