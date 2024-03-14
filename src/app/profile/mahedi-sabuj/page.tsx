import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mahedi Sabuj"
};

export default function Resume() {
  return (
    <div className="resume">
      <section className="profile-info">
        <h1 className="title"><strong>Abdullah &ndash; Al &ndash; Mahedi Sabuj</strong></h1>
        <h2 className="headline">Adobe Certified AEM Developer | Adobe AEM Community Advisor</h2>
      </section>
      <section className="pt-4">
      </section>
    </div>
  );
}
