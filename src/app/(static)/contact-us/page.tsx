import { Metadata } from "next";

import ArticleReview from "@/components/article-review/article-review";

export const metadata: Metadata = {
  title: "Contact Us",
  alternates: {
    canonical: "/contact-us"
  }
};

export default function Contact() {
  return (
    <div className="md:w-9/12">
      <h1 className="text-2xl" itemProp="name">
        Contact Us
      </h1>
      <ArticleReview/>
    </div>
  ); 
}
