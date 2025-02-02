import { Metadata } from "next";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { SETUP_DEEPSEEK_LOCALLY as ARTICLE } from "@/lib/data/article/ai/large-language-model";
import TOPICS from "@/lib/data/article/topics";
import Link from "next/link";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: TOPICS.AI_LLM.title,
    url: TOPICS.AI_LLM.url
  }],
  current: ARTICLE.title
}

export default function OsgiConfiguration() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/> 
      <article itemScope itemType="https://schema.org/Article">
        <Article
          title={ARTICLE.title}
          publishDate={ARTICLE.publishDate}
          modifiedDate={ARTICLE.modifiedDate}/>
        <div>
          <section className="pt-6">
            DeepSeek R1 is a powerful conversational AI model, and integrating it with Chainlit UI allows to create an interactive
            and user friendly interface. Using Ollama, allows to run LLMs locally, making it simple to deploy and interact with models like DeepSeek R1.
          </section>
          <section className="pt-3">
            To download Ollama, visit the official <Link href="https://github.com/ollama/ollama" target="_blank" className="text-blue-600">Ollama GitHub Repository</Link> and select the
            version compatible with your operating system (Windows, macOS, or Linux). Alternatively, you can pull the Docker image if preferred.
          </section>
        </div>
      </article>
    </div>
  );
}
