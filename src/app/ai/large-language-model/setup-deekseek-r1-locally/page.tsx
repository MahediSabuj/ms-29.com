import { Metadata } from "next";
import Link from "next/link";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import Highlight from "@/components/highlight/highlight";
import { SETUP_DEEPSEEK_LOCALLY as ARTICLE } from "@/lib/data/article/ai/large-language-model";
import TOPICS from "@/lib/data/article/topics";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const PULL_DEEPSEEK_R1 = `ollama pull deepseek-r1:8b`;
const RUN_DEEPSEEK_R1 = `ollama run deepseek-r1:8b`;

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
            DeepSeek R1 is a powerful conversational AI model, and integrating it with Chainlit UI allows to create an
            interactive
            and user friendly interface. Using Ollama, allows to run LLMs locally, making it simple to deploy and
            interact with models like DeepSeek R1.
          </section>
          <h2 className="text-xl mt-4">
            <strong>Install Ollama</strong>
          </h2>
          <section>
            To download Ollama, visit the official <Link href="https://github.com/ollama/ollama" target="_blank" className="text-blue-600">Ollama GitHub Repository</Link> and
            select the version compatible with your operating system (Windows, macOS, or Linux). Alternatively, you can pull the
            Docker image if preferred.
          </section>
          <h2 className="text-xl mt-4">
            <strong>Run DeepSeek R1 using Ollama</strong>
          </h2>
          <section>
            Ollama simplifies model management. To download choose the <Link className="text-blue-600" target="_blank" href="https://ollama.com/library/deepseek-r1:8b">appropriate DeepSeek version</Link> based on
            your local environment. I am able to run the <strong>8b</strong> model on an Apple M1 Pro with 16GB of memory. To Setup DeekSeek R1, run:
            <Highlight code={PULL_DEEPSEEK_R1} language="shell" path=""/>
            <div className="pt-1">This command fetches the DeepSeek R1 model and prepares it for local use.</div>
          </section>
          <section className="pt-3">
            To start an interactive session with DeepSeek R1 using the following command:
            <Highlight code={RUN_DEEPSEEK_R1} language="shell" path=""/>
            <div className="pt-1">
              This will launch the model, allowing you to interact with it directly in your terminal. Once the model is running,
              you can start typing prompts and receive responses in real-time.
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
