import ArticleList from "@/components/article-list/article-list";
import {IArticleList} from "@/types/article";

const articles : IArticleList = {
  articleItems: [{
    title: "Create Content Fragment Programmatically",
    description: `Creating a content fragment programmatically requires setting up a system user with Read 
      permission for the content fragment model and Read, Modify, Create permissions for the asset folder where the 
      content fragment will be stored. Additionally, ensure the content fragment model and asset folder are
      created for saving the content fragment.`,
    url: "/aem/content-fragment/create-content-fragment-programmatically",
    publishDate: "February 16, 2024",
    modifiedDate: "February 16, 2024"
  }]
}

export default function ContentFragment() {
  return (
    <div>
      <ArticleList {...articles}/>
    </div>
  )
}