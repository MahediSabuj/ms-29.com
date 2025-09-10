import { Metadata } from "next";
import Image from "next/image";

import Article from "@/components/article/article";
import Highlight from "@/components/highlight/highlight";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/lib/data/article/topics";
import ArticleReviewForm from "@/components/form/article-review/article-review";
import ArticleReviewList from "@/components/article-review-list/article-review-list";

import { INSTALL_SSL_CERTIFICATE_FROM_PFX_FILE as ARTICLE } from "@/lib/data/article/aws/ec2";

import import_ssl_certificate from './assets/aws-certificate-manager_import-certificate.webp';
import certificates_list from './assets/aws-certificate-manager_certificates-list.webp';
import default_certificate from './assets/aws-application-load-balancer_default-certificate.webp';
import https_listener_certificate from './assets/aws-elb-https-listener-certificates.webp';
import sni_add_certificate from './assets/aws-elb-sni-add-certificate.webp';
import sni_available_certificates from './assets/aws-elb-sni-available-certificates.webp';
import sni_pending_certificates from './assets/aws-elb-sni-pending-certificates.webp';
import sni_certificates from './assets/aws-elb-sni-certificates.webp';

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

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: TOPICS.AWS_EC2.title,
    url: TOPICS.AWS_EC2.url
  }],
  current: ARTICLE.title
}

export default function InstallCertificate() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <article itemScope itemType="https://schema.org/Article">
        <Article
          title={ARTICLE.title}
          publishDate={ARTICLE.publishDate}
          modifiedDate={ARTICLE.modifiedDate}
          views={ARTICLE.views}/>
        <div className="pt-6">
          Installing SSL certificate is crucial for securing websites, ensuring encryption of data transmission between users
          browser and the site to protect sensitive information. Let&apos;s explore the process of installing SSL certificate
          from PFX file, providing step-by-step instructions for a seamless setup.
        </div>
        <h2 id="export-certificate" className="text-xl mt-6">
          <strong>Extract Private Key and Certificate from PFX file</strong>
        </h2>
        <div className="py-1">
          PFX (Personal Exchange Format) file, also known as a PKCS #12 file, is a binary format used to store a certificate and its corresponding private
          key. OpenSSL command can be used to extract both the certificate and private key from a PFX file.
        </div>
        <Highlight code={extract_certificate} language="shell" path=""/>
        <div className="py-3">
          In case the PFX file is password protected, you will be prompted to enter the password as &quot;Enter Import Password&quot;.
          If the password is valid, website.com.txt file will be saved in the current directory. The first section of the website.com.txt file
          contains the private key, which can be saved as website.com.key. The second section contains the certificate body,
          which can be saved as website.com.crt file.
        </div>
        <div>
          Once the key and crt files are prepared, you can proceed to configure them on your http server, such as Apache or Nginx.
          Alternatively, if you are using AWS Elastic Load Balancer (ELB), you can utilize AWS Certificate Manager (ACM) to manage your
          SSL certificates and associate them with your load balancer.
        </div>
        <h2 id="configure-certificate-nginx" className="text-xl mt-6">
          <strong>Configure SSL Certificate using Nginx</strong>
        </h2>
        <div>
          To configure SSL in Nginx, need to upload the required files to the server using FileZilla or another FTP client.
          Once uploaded, reference these files in the Nginx server block configuration. Finally, restart Nginx to apply the changes.
        </div>
        <Highlight code={nginx_conf} language="nginx" path="website.com.conf"/>
        <h2 id="configure-certificate-aws" className="text-xl mt-6">
          <strong>Configure SSL Certificate using ACM and ELB</strong>
        </h2>
        <div className="pb-2">
          To import a certificate using AWS Certificate Manager, navigate to the Certificate Manager service and select
          the &quot;Import Certificate&quot; option from the left-hand menu. Paste the certificate and private key into
          the respective text boxes, add tags accordingly, and review the details before confirming the import certificate.
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
        <div className="pt-4 pb-2">
          When creating a new Application Load Balancer, you can set up the Default Certificate by selecting the certificate
          imported in the previous step under the &quot;Default SSL/TLS server certificate&quot; section.
        </div>
        <Image src={default_certificate} className="border"
          alt="AWS Elastic Load Balancer Default Certificate Setup">
        </Image>
        <div className="py-2">
          After confirming other details, proceed to create the new load balancer. Once the ELB is created, you can verify
          its configuration by accessing HTTPS:443 from the Listeners and Rules tab. Then, navigate to the &quot;Certificates&quot;
          tab on the details page to confirm the setup.
        </div>
        <Image src={https_listener_certificate} className="border"
          alt="AWS ELB HTTPS Listener Certificate">
        </Image>
        <div className="pt-2">
          You can utilize the &quot;Change Default&quot; feature to change the default certificate if the current one expires or for any existing HTTPS listener.
        </div>
        <div className="pt-4 py-2">
          If you&apos;re maintaining the same load balancer to support multiple domains on the same port, you can assign different certificate for each domain using the &quot;Add SSL Certificates for SNI&quot; feature.
        </div>
        <Image src={sni_add_certificate} className="border"
          alt="Add SSL Certificate for SNI">
        </Image>
        <div className="py-2">
          Select the certificate you want to add from the list of available certificates and choose &quot;Include as Pending below&quot;.
        </div>
        <Image src={sni_available_certificates} className="border"
          alt="Available Certificate for SNI">
        </Image>
        <div className="py-2">
          After confirming the selection, you need to proceed by clicking on &quot;Add Pending Certificates&quot;.
        </div>
        <Image src={sni_pending_certificates} className="border"
          alt="Add Pending Certificate for SNI">
        </Image>
        <div className="py-2">
          The certificate will now be available in the list of &quot;Listener Certificates for SNI&quot;.
        </div>
        <Image src={sni_certificates} className="border"
          alt="Listener Certificates for SNI">
        </Image>
        <div className="pt-4">
          If you&apos;ve followed along, you can now verify the SSL certificate and its expiry date from your preferred web browser by visiting your website.
        </div>
      </article>
      <div className="mt-8 mb-4">
        <ArticleReviewList items={[]}/>
        <ArticleReviewForm/>
      </div>
    </div>
  );
}
