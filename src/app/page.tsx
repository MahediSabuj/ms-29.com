import ArticleList from "@/components/article-list/article-list";
import { IArticleList } from "@/types/article";
import { PAGE_TYPE } from "@/types/enum/page-type";
import { AEM_SITES } from "@/lib/data/article/aem/sites";
import { AEM_FORMS } from "@/lib/data/article/aem/forms";
import { CONTENT_FRAGMENT } from "@/lib/data/article/aem/content-fragment";
import { AEM_SPA } from "@/lib/data/article/aem/spa";
import { CODE_COVERAGE } from "@/lib/data/article/aem/code-coverage";
import { AEM_DISPATCHER } from "@/lib/data/article/aem/dispatcher";
import { AWS_EC2 } from "@/lib/data/article/aws/ec2";
import { SF_LWC } from "@/lib/data/article/salesforce/lwc";


const articles : IArticleList = {
  articleItems: [
    ...AEM_SITES,
    ...AEM_FORMS,
    ...CONTENT_FRAGMENT,
    ...AEM_SPA,
    ...CODE_COVERAGE,
    ...AEM_DISPATCHER,
    ...AWS_EC2,
    ...SF_LWC
  ],
  pageType: PAGE_TYPE.HOME_PAGE
}

export default function Home() {
  return (
      <ArticleList {...articles}/>
  );
}
