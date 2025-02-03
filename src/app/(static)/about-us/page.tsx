import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  alternates: {
    canonical: "/about-us"
  }
};

export default function About() {
  return (
    <div>
      <h1 className="text-2xl" itemProp="name">
        About Us
      </h1>
      <section className="pt-6">
        Welcome to MS-29.com, a project born out of curiosity, problem-solving, and a passion for sharing knowledge.
      </section>
      <section className="pt-3">
        Like many developers, I started by taking notes&mdash;scribbling down solutions, documenting tricky bugs, and sharing insights
          with my team. Over time, I contributed to communities like <Link className="text-blue-600" target="_blank" href="https://stackoverflow.com/users/4304727/mahedi-sabuj">Stack Overflow</Link> and <Link className="text-blue-600" target="_blank" href="https://experienceleaguecommunities.adobe.com/t5/user/viewprofilepage/user-id/17461470">Experience League</Link>, but my knowledge became scattered
        across different platforms.
      </section>
      <section className="pt-3">
        This website is my way of organizing and sharing those learnings in one place. Whether you&apos;re debugging an issue, learning a new
        concept, or searching for best practices, I hope you find something useful here. Let&apos;s keep learning together!
      </section>
      <section className="pt-3">
          Want to know more or have a question? Feel free to <Link className="text-blue-600" target="_blank" href="/contact-us">contact us here</Link> – I&apos;d love to connect!
      </section>
    </div>
  );
}
