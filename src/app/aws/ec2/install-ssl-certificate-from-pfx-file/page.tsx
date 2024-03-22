import { Metadata } from "next";

import Article from "@/components/article/article";
import { INSTALL_SSL_CERTIFICATE_FROM_PFX_FILE as ARTICLE } from "@/lib/data/article/aws/ec2";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

export default function InstallCertificate() {
  return (
    <div>
      <article itemScope itemType="https://schema.org/Article">
        <Article
          title={ARTICLE.title}
          url={ARTICLE.url}
          publishDate={ARTICLE.publishDate}
          modifiedDate={ARTICLE.modifiedDate}/>
        <div className="pt-6">
          SSL certificates are critical for securing websites, encrypting data between users browsers and the site to protect
          sensitive information.
        </div>
      </article>
    </div>
  );
}
