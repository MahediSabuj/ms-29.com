import ArticleList from "@/components/article-list/article-list";
import {IArticleList} from "@/types/article";

const articles : IArticleList = {
  articleItems: [{
    title: "Form Submission from Publish to Author Instance",
    description: ``,
    url: "/aem/forms/form-submission-from-publish-to-author-instance",
    publishDate: "February 16, 2024",
    modifiedDate: "February 16, 2024"
  }]
};

export default function Forms() {
  return (
    <div>
      <ArticleList {...articles}/>
    </div>
  )
}
