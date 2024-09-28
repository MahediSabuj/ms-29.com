import type { Metadata } from "next";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import aem_architect_certification from './assets/Adobe_Certified_Master_Experience_Cloud_products_Digital_Badge.webp';
import adobe_developer_certification from './assets/Adobe_Certified_Expert_Experience_Cloud_products_Digital_Badge.webp';
import salesforce_platform_developer_certification from './assets/Salesforce_Certified_Platform_Developer_I.webp';
import salesforce_javascript_developer_certification from './assets/Salesforce_Certified_JavaScript_Developer_I.webp';

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
  title: "Salesforce Certified JavaScript Developer I",
  issued: "Mar 2024",
  badge: salesforce_javascript_developer_certification,
  url: "https://www.salesforce.com/trailblazer/mahedi-sabuj"
}, {
  title: "Adobe Experience Manager Sites Developer",
  issued: "Jul 2021",
  expired: "May 2026",
  badge: adobe_developer_certification,
  url: "https://www.credly.com/badges/e6f2d0ab-286f-455c-b169-271f57f43e03"
}, {
  title: "Salesforce Certified Platform Developer I",
  issued: "Nov 2020",
  badge: salesforce_platform_developer_certification,
  url: "https://www.salesforce.com/trailblazer/mahedi-sabuj"
}]

export default function Resume() {
  return (
    <div className="resume">
      <section className="profile-info">
        <h1 className="title"><strong>Abdullah &ndash; Al &ndash; Mahedi Sabuj</strong></h1>
        <h2 className="headline">Adobe Certified AEM Developer | Adobe AEM Community Advisor</h2>
      </section>
      <section className="pt-6">
        Experienced AEM Developer with 6 years of expertise, currently working on migrating projects from AMS to AEMaaCS.
      </section>
      <section className="pt-6">
        <h2 className="text-xl">Certifications</h2>
        <div className="pt-3 flex flex-col gap-y-4">
          {certifications.map((certification, index) => {
            return (
              <div key={index} className="flex flex-row gap-x-2">
                <div>
                  <Image src={certification.badge}
                    width="50" height="50"
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
