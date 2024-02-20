import ArticleList from "@/components/article-list/article-list";
import { PAGE_TYPE } from "@/types/enum/page-type";
import { IArticleList } from "@/types/article";
import { AWS_EC2 } from "@/lib/data/article/aws/ec2";

const articles : IArticleList = {
  articleItems: AWS_EC2,
  pageType: PAGE_TYPE.APP_PAGE
}

export default function Ec2() {
  return (
    <div>
      <ArticleList {...articles}/>
    </div>
  )  
}
