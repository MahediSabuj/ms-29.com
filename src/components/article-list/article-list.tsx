import Link from "next/link";

import { IArticleList } from "@/types/article";

export default function ArticleList({ articleItems } : IArticleList) {
  return (
    <div className="article-list">
      {articleItems.map((item, index) => {
        return (
          <article key={index}>
            <Link href={item.url}>
              <h2 className="text-2xl">{item.title}</h2>
            </Link>
          </article>  
        )
      })}
    </div>
  ) 
}
