import type { Metadata } from "next";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import salesforce_certified_ai_associate from './assets/Salesforce_Certified_AI_Associate.png';
import aem_expert_certification from './assets/Adobe_Certified_Expert_Experience_Cloud_products_Digital_Badge.webp';
import salesforce_platform_developer_certification from './assets/Salesforce_Certified_Platform_Developer_I.webp';
import salesforce_javascript_developer_certification from './assets/Salesforce_Certified_JavaScript_Developer_I.webp';
import microsoft_html5_css3_js_certification from './assets/Programming_in_HTML5_with_JavaScript_and_Css3.png';

export const metadata: Metadata = {
  title: "Mahedi Sabuj",
  alternates: {
    canonical: "/profile/mahedi-sabuj"
  }
};

interface Certification {
  title: string;
  issued: string;
  expired?: string;
  badge: StaticImageData,
  url: string;
}

const certifications: Certification[] = [{
  title: "Adobe Experience Manager Cloud Service Migration Expert",
  issued: "July 2025",
  expired: "July 2027",
  badge: aem_expert_certification,
  url: "https://certification.adobe.com/credential/verify/7129fc19-5bb0-11f0-9b2a-42010a400fc3"
}, {
  title: "Salesforce Certified AI Associate",
  issued: "April 2025",
  badge: salesforce_certified_ai_associate,
  url: "https://www.salesforce.com/trailblazer/mahedi-sabuj"
}, {
  title: "Salesforce Certified JavaScript Developer I",
  issued: "March 2024",
  badge: salesforce_javascript_developer_certification,
  url: "https://www.salesforce.com/trailblazer/mahedi-sabuj"
}, {
  title: "Adobe Experience Manager Sites Developer Expert",
  issued: "July 2021",
  expired: "May 2026",
  badge: aem_expert_certification,
  url: "https://certification.adobe.com/credential/verify/c8c94bc5-ea0c-4d52-8e67-750ae04cc9c3"
}, {
  title: "Salesforce Certified Platform Developer I",
  issued: "November 2020",
  badge: salesforce_platform_developer_certification,
  url: "https://www.salesforce.com/trailblazer/mahedi-sabuj"
}, {
  title: "Programming in HTML5 with JavaScript and CSS3",
  issued: "May 2019",
  badge: microsoft_html5_css3_js_certification,
  url: "https://www.credly.com/badges/41de70eb-156a-49b6-a03e-0892d3ed06b4"
}]

export default function Resume() {
  return (
    <div className="resume">
      <section className="profile-info">
        <h1 className="title"><strong>Abdullah &ndash; Al &ndash; Mahedi Sabuj</strong></h1>
        <h2 className="headline">AEM Sites Developer Expert | AEM Community Advisor | AEMaaCS Migration Expert</h2>
      </section>
      <section className="pt-6">
        Experienced AEM Developer with 6 years of expertise, specializing in AEM 6.5, AEM as a Cloud Service (AEMaaCS), AEM SPA (React), and AEM Cloud Migration.
        Additionally proficient in various programming languages and frameworks, including Java, Spring Boot, C++, C#, JavaScript, and MicroService.
      </section>
      <section className="pt-6">
        <h2 className="text-xl">Certifications</h2>
        <div className="pt-3 flex flex-col gap-y-4">
          {certifications.map((certification, index) => {
            return (
              <div key={index} className="flex flex-row gap-x-2">
                <div>
                  <Image src={certification.badge}
                    style={{width: 50, height: 50}}
                    alt={certification.title}>
                  </Image>
                </div>
                <div>
                  <div>
                    <Link className="text-[#3273dc]" target="_blank" href={certification.url}>
                      {certification.title}
                    </Link>
                  </div>
                  <div>
                    <span className="text-[#636B74]">Issued</span> {certification.issued}
                    {certification.expired && <> - <span className="text-[#636B74]">Expires</span> {certification.expired}</>}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      <section className="pt-6">
        <h2 className="text-xl">Publications</h2>
        <div>
          <Link className="text-[#3273dc]" target="_blank" href="https://ieeexplore.ieee.org/document/7307475">
            Randomly Encrypted Key Generation Algorithm against Side Channel Attack in Cloud Computing
          </Link>
        </div>
        <div className="md:inline">
          <span className="text-[#636B74] mr-2">Publisher</span>
          <span>IEEE</span>
        </div>
        <div className="md:inline md:ml-4">
          <span className="text-[#636B74] mr-2">Published</span>
          <span>October 2015</span>
        </div>
      </section>
    </div>
  );
}
