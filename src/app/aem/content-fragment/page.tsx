import ArticleList from "@/components/article-list/article-list";
import {IArticleList} from "@/types/article";

const articles : IArticleList = {
  articleItems: [{
    title: "Create Content Fragment Programmatically",
    description: ``,
    url: "/aem/content-fragment/create-content-fragment-programmatically",
    publishDate: "February 15, 2024",
    modifiedDate: "February 15, 2024"
  }]
}

export default function ContentFragment() {
  return (
    <div>
      <ArticleList {...articles}/>
    </div>
  )
}