import Article from "@/components/article/article";
import { INSTALL_SSL_CERTIFICATE_FROM_PFX_FILE as ARTICLE } from "@/lib/data/article/aws/ec2";

export default function InstallCertificate() {
  return (
    <div>
      <article itemScope itemType="https://schema.org/Article">
        <Article
          title={ARTICLE.title}
          url={ARTICLE.url}
          publishDate={ARTICLE.publishDate}
          modifiedDate={ARTICLE.modifiedDate}/>
      </article>
    </div>
  );
}
