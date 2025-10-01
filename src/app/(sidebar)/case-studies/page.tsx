import { Metadata } from "next";

import ArticleList from "@/components/article-list/article-list";
import { IArticleList } from "@/types/article";
import { PAGE_TYPE } from "@/types/enum/page-type";

import { AEM_PERFORMANCE_CASE_STUDIES } from "@/data/case-study/aem-performance";

export const metadata: Metadata = {
  title: "Real World Solutions & Case Studies",
  description: "Explore real-world project case studies showcasing performance optimizations, technical solutions, and enterprise implementations across AEM, AWS, and modern web technologies.",
  alternates: {
    canonical: "/case-studies"
  }
};

const caseStudies: IArticleList = {
  articleItems: [
    ...AEM_PERFORMANCE_CASE_STUDIES
  ],
  pageType: PAGE_TYPE.HOME_PAGE
}

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Real World Solutions & Case Studies
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Real world project implementations and technical solutions. Explore detailed case studies
            showcasing performance optimizations, enterprise implementations, and complex technical challenges 
            solved across AEM, AWS, and modern web technologies.
          </p>
        </div>
      </section>
      <ArticleList {...caseStudies}/>
    </div>
  );
}