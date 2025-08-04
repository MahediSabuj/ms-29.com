import { IArticleList } from "@/types/article";
import Article from "@/components/article/article";
import { PAGE_TYPE } from "@/types/enum/page-type";

import styles from "./article-list.module.scss";

export default function ArticleList({ articleItems, pageType } : IArticleList) {
  const showTopics = pageType === PAGE_TYPE.HOME_PAGE;
  const showDescription = pageType != PAGE_TYPE.RECORD_PAGE;

  articleItems.sort((a,b) =>
      (new Date(a.modifiedDate) < new Date(b.modifiedDate)) ? 1 :
      ((new Date(b.modifiedDate) < new Date(a.modifiedDate)) ? -1 : 0));

  return (
    <div className={styles.articleList}>
      {articleItems.map((item, index) => {
        return (
          <article className={styles.articleItem} key={index}>
            <Article title={item.title}
              url={item.url}
              topics={showTopics ? item.topics : []}
              description={showDescription ? item.description : ""}
              publishDate={item.publishDate}
              modifiedDate={item.modifiedDate}
              views={item.views}/>
          </article>
        )
      })}
    </div>
  ) 
}
