import Image from "next/image";
import { Metadata } from "next";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import Reference from "@/components/reference/reference";
import { FORM_SUBMISSION_AUTHOR_INSTANCE as ARTICLE } from "@/lib/data/article/aem/forms";

import aem_ds_settings_service from './assets/aem-ds-settings-service.webp';
import form_submission_from_publisher_to_author_instance from './assets/form-submission-from-publisher-to-author-instance.png';

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: "AEM Forms",
    url: "/aem/forms"
  }],
  current: ARTICLE.title
}

export default function SubmitFormIntoAuthor() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <article itemScope itemType="https://schema.org/Article">
        <Article
          title={ARTICLE.title}
          publishDate={ARTICLE.publishDate}
          modifiedDate={ARTICLE.modifiedDate}/>
        <section className="pt-6">
          In General, when an end user submits a form, the request is routed to the publish environment.
          Any modifications made at the CRX/DE during the execution of the post request are stored in
          the publish environment. However, a request may arise where upon form submission, certain data
          such as a content fragment needs to be created on the author instance. Following approval from
          business-level users, the content will be published to the publish environment, making it publicly
          accessible on the internet.
        </section>
        <Image className="py-3" src={form_submission_from_publisher_to_author_instance}
               alt="Form Submission from Publish to Author instance">
        </Image>
        <section className="pb-3">
          <strong>AEM Forms</strong> offers the capability to send requests from the publisher to the author. <strong>AEM
          DS Settings Service</strong> OSGi Configuration must be updated before any adaptive form submission from the publish
          server. Otherwise, the Form submission shall fail.
        </section>
        <section className="pb-2">
          The following details need to be updated in their respective fields:
          <ul className="list-disc ml-6 pt-1 pl-2.5">
            <li>
              <strong>Processing Server URL: </strong> URL of the AEM author instance (e.g., https://localhost:4502).
            </li>
            <li>
              <strong>Processing Server User Name: </strong> Author instance Login User Name.
            </li>
            <li>
              <strong>Processing Server Password: </strong> Author instance Login Password.
            </li>
          </ul>
        </section>
        <Image className="border" src={aem_ds_settings_service}
               alt="AEM DS Settings Service">
        </Image>
        <section className="pt-1">
          After updating the configuration, you can verify by submitting a form from the publish instance. If you configure
          the submit action to &quot;Invoke an AEM workflow&quot;, the workflow will be triggered on the Author environment.
        </section>
      </article>
      <Reference references={[{
        title: "Configuring AEM DS Settings",
        url: "https://experienceleague.adobe.com/en/docs/experience-manager-65/content/forms/install-aem-forms/configure-aem-forms/configuring-the-processing-server-url"
      }]}/>
    </div>
  );
}
