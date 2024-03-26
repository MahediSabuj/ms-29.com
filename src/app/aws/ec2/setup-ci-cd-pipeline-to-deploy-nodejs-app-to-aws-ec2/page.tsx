import Article from "@/components/article/article";
import { SETUP_CI_CD_PIPELINE_TO_DEPLOY_NODEJS_APP_TO_AWS_EC2 as ARTICLE } from "@/lib/data/article/aws/ec2";

export default function SetupCICDPipeline() {
  return (
    <div>
      <article itemScope itemType="https://schema.org/Article">
        <Article
          title={ARTICLE.title}
          publishDate={ARTICLE.publishDate}
          modifiedDate={ARTICLE.modifiedDate}/>
      </article>
    </div>
  );
}
