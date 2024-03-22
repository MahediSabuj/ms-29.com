import { Metadata } from "next";

import Article from "@/components/article/article";
import Highlight from "@/components/highlight/highlight";
import { INSTALL_SSL_CERTIFICATE_FROM_PFX_FILE as ARTICLE } from "@/lib/data/article/aws/ec2";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const extract_certificate =
`openssl pkcs12 -in filename.pfx -out filename.txt -nodes`;

const nginx_conf =
`ssl_certificate      "path/to/ssl/your-website-name.crt";
 ssl_certificate_key  "path/to/ssl/your-website-name.key";`;

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
          Installing SSL certificate is crucial for securing websites, ensuring encryption of data transmission between users
          browser and the site to protect sensitive information. Let&apos;s explore the process of installing SSL certificate
          from PFX file, providing step-by-step instructions for a seamless setup.
        </div>
        <div className="pt-3 py-1">
          PFX (Personal Exchange Format) file, also known as a PKCS #12 file, is a binary format used to store a certificate and its corresponding private
          key. OpenSSL command can be used to extract both the certificate and private key from a PFX file.
        </div>
        <Highlight code={extract_certificate} language="shell" path=""/>
        <div className="pt-1">
          In case the PFX file is password protected, you will be prompted to enter the password as &quot;Enter Import Password&quot;.
          If the password is valid, filename.txt file will be saved in the current directory. The first section of the filename.txt file
          contains the private key, which can be saved as your-website-name.key. The second section contains the certificate body,
          which can be saved as your-website-name.crt file.
        </div>
        <div className="pt-4">
          Once the key and crt files are prepared, you can proceed to configure them on your server, such as Apache or Nginx.
          Alternatively, if you are using AWS Elastic Load Balancer, you can utilize AWS Certificate Manager to manage your
          SSL certificates and associate them with your load balancer.
        </div>
      </article>
    </div>
  );
}
