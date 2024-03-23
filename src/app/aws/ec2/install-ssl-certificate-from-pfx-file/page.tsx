import { Metadata } from "next";
import Image from "next/image";

import Article from "@/components/article/article";
import Highlight from "@/components/highlight/highlight";
import { INSTALL_SSL_CERTIFICATE_FROM_PFX_FILE as ARTICLE } from "@/lib/data/article/aws/ec2";

import import_ssl_certificate from './assets/aws-certificate-manager_import-certificate.png';
import certificates_list from './assets/aws-certificate-manager_certificates-list.png';

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const extract_certificate =
`openssl pkcs12 -in website.com.pfx -out website.com.txt -nodes`;

const nginx_conf =
`server {
  listen  443 ssl;
  server_name  website.com;

  ssl_certificate  "path/to/cert/website.com.crt";
  ssl_certificate_key  "path/to/cert/website.com.key";

  ssl_protocols  TLSv1.2 TLSv1.3;
  ssl_ciphers  TLS-CHACHA20-POLY1305-SHA256:TLS-AES-256-GCM-SHA384:TLS-AES-128-GCM-SHA256:HIGH:!aNULL:!MD5;
  ssl_prefer_server_ciphers off;
}`;

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
          If the password is valid, website.com.txt file will be saved in the current directory. The first section of the website.com.txt file
          contains the private key, which can be saved as website.com.key. The second section contains the certificate body,
          which can be saved as website.com.crt file.
        </div>
        <div className="pt-4">
          Once the key and crt files are prepared, you can proceed to configure them on your http server, such as Apache or Nginx.
          Alternatively, if you are using AWS Elastic Load Balancer, you can utilize AWS Certificate Manager to manage your
          SSL certificates and associate them with your load balancer.
        </div>
        <div className="pt-3">
          To configure SSL in Nginx, need to upload the required files to the server using FileZilla or another FTP client.
          Once uploaded, reference these files in the Nginx server block configuration. Finally, restart Nginx to apply the changes.
        </div>
        <Highlight code={nginx_conf} language="nginx" path="website.com.conf"/>
        <div className="pt-6 pb-2">
          To import a certificate using AWS Certificate Manager, navigate to the Certificate Manager service and select
          the &quot;Import Certificate&quot; option from the left-hand menu. Paste the certificate and private key into
          the respective text boxes, add tags if necessary, and review the details before confirming the import certificate.
        </div>
        <Image src={import_ssl_certificate} className="border"
          alt="Import SSL Certificate in AWS Certificate Manager">
        </Image>
        <div className="py-2">
          Upon successful completion, the imported certificate will appear in the list of certificates.
        </div>
        <Image src={certificates_list} className="border"
          alt="AWS Certificate Manager Certificates List">
        </Image>
      </article>
    </div>
  );
}
