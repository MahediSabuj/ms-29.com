import { IArticleList } from "@/types/article";
import Article from "@/components/article/article";

export default function ArticleList({ articleItems } : IArticleList) {
  return (
    <div className="article-list">
      {articleItems.map((item, index) => {
        return (
          <Article key={index}
            title={item.title}
            url={item.url}
            description={item.description}
            publishDate={item.publishDate}
            modifiedDate={item.modifiedDate}/>
        )
      })}
    </div>
  ) 
}
