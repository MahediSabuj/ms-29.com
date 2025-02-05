import { Metadata } from "next";
import Link from "next/link";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import Highlight from "@/components/highlight/highlight";
import TOPICS from "@/lib/data/article/topics";
import ArticleReviewList from "@/components/article-review-list/article-review-list";
import ArticleReviewForm from "@/components/form/article-review/article-review";

import { SETUP_DEEPSEEK_LOCALLY as ARTICLE } from "@/lib/data/article/ai/deep-learning";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const INSTALL_OLLAMA = `curl -fsSL https://ollama.com/install.sh | sh`;
const PULL_DEEPSEEK_R1 = `ollama pull deepseek-r1:8b`;
const RUN_DEEPSEEK_R1 = `ollama run deepseek-r1:8b`;
const INSTALL_CHAINLIT = `pip install chainlit`;
const CHAINLIT_DEEPSEEK = `chainlit run app.py -w`;

const OLLAMA = `import time
from openai import AsyncOpenAI

import chainlit as cl

client = AsyncOpenAI(
  api_key="ollama",
  base_url="http://localhost:11434/v1/"
)

@cl.on_message
async def on_message(msg: cl.Message):
  start = time.time()
  stream = await client.chat.completions.create(
    model="deepseek-r1:8b",
    messages=[
      {"role": "system", "content": "You are an helpful assistant"},
      *cl.chat_context.to_openai()
    ],
    stream=True
  )

  thinking = False
    
  # Streaming the thinking
  async with cl.Step(name="Thinking") as thinking_step:
    final_answer = cl.Message(content="")

    async for chunk in stream:
      delta = chunk.choices[0].delta

       if delta.content == "<think>":
         thinking = True
         continue
                
       if delta.content == "</think>":
         thinking = False
         thought_for = round(time.time() - start)
         thinking_step.name = f"Thought for {thought_for}s"
         await thinking_step.update()
         continue
            
       if thinking:
         await thinking_step.stream_token(delta.content)
       else:
         await final_answer.stream_token(delta.content)
                
  await final_answer.send()`

const OLLAHA_API = `curl http://localhost:11434/api/generate -d '{  
  "model": "deepseek-r1",  
  "prompt": "Explain quantum computing in simple terms."
}'`;

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: TOPICS.DEEP_LEARNING.title,
    url: TOPICS.DEEP_LEARNING.url
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
            interactive and user friendly interface. Using Ollama, allows to run LLMs locally, making it simple to deploy and
            interact with models like DeepSeek R1.
          </section>
          <h2 className="text-xl mt-4">
            <strong>Install Ollama</strong>
          </h2>
          <section>
            To download Ollama, visit the official <Link href="https://github.com/ollama/ollama" target="_blank" className="text-blue-600">Ollama GitHub Repository</Link> and
            select the version compatible with your operating system (Windows, macOS, or Linux). Alternatively, you can pull the Docker image if preferred.
            </section>
            <section className="pt-3">
              For <strong>Linux</strong>, open the terminal and run the command:
              <Highlight code={INSTALL_OLLAMA} language="bash" path=""/>
              <div className="pt-2">For <strong>macOS</strong> and <strong>Windows</strong>, simply run the installer
                and follow the on-screen instructions to complete the installation.
              </div>
            </section>
            <h2 className="text-xl mt-4">
              <strong>Run DeepSeek R1 using Ollama</strong>
            </h2>
            <section>
              Ollama simplifies model management. To download choose the <Link className="text-blue-600" target="_blank" href="https://ollama.com/library/deepseek-r1:8b">appropriate
              DeepSeek version</Link> based on your local environment. I am able to run the <strong>8b</strong> model on an Apple M1 Pro with 16GB of
              memory. To Setup DeekSeek R1, run:
              <Highlight code={PULL_DEEPSEEK_R1} language="bash" path=""/>
              <div className="pt-1">This command fetches the DeepSeek R1 model and prepares it for local use.</div>
            </section>
            <section className="pt-3">
              To start an interactive session with DeepSeek R1 using the following command:
              <Highlight code={RUN_DEEPSEEK_R1} language="bash" path=""/>
              <div className="pt-1">
                This will launch the model, allowing you to interact with it directly in your terminal. Once the model is running,
                you can start typing prompts and receive responses in real-time.
              </div>
            </section>
            <h2 className="text-xl mt-4">
              <strong>Integrate Chainlit UI</strong>
            </h2>
            <section>
              Install Chainlit using <strong>pip</strong>. Make sure you have Python installed.
              <Highlight code={INSTALL_CHAINLIT} language="bash" path=""/>
            </section>
            <section className="pt-3">
              Create a new Python script, for example, <code className="code-inline">app.py</code>, and use it to
              connect Chainlit with DeepSeek R1 via Ollama.
              For sample example, refer to the <Link className="text-blue-600" target="_blank" href="https://github.com/Chainlit/cookbook/tree/main/deepseek-r1">Chainlit
              Cookbook</Link> on GitHub. The cookbook provides sample code and additional guidance to help you integrate Chainlit with DeepSeek R1
              via Ollama. To run below code, you also need to install the OpenAI package, using the same way you did for Chainlit.
              <Highlight code={OLLAMA} language="python" path="app.py"/>
              <div className="pt-2">Once the script is ready, you can run the Chainlit application using the following
                command:
              </div>
              <Highlight code={CHAINLIT_DEEPSEEK} language="bash" path=""/>
              <div className="pt-2">This will launch the Chainlit interface in your browser at <Link className="text-blue-600" target="_blank" href="http://localhost:8000">http://localhost:8000</Link>.</div>
            </section>
            <h2 className="text-xl mt-4">
              <strong>Integrate with Custom Applications</strong>
            </h2>
            <section>
              Ollama provides an API for integrating the model into custom applications. Use the following steps to set it up:
              <ul className="list-disc ml-6 pt-1 pl-2.5">
                <li><strong>Start the Ollama Server:</strong> <code className="code-inline">ollama serve</code></li>
                <li><strong>Execute the API:</strong> Send HTTP requests to the Ollama server (default port: 11434) to interact with DeepSeek R1 programmatically.
                  For example, using curl:
                  <Highlight code={OLLAHA_API} language="bash" path=""/>
                </li>
              </ul>
              <div className="pt-3">By following these steps, you can easily install Ollama and run DeepSeek R1 locally and integrate it with custom applications.</div>
            </section>
          </div>
        </article>
        <div className="mt-8 mb-4">
          <ArticleReviewList items={[]}/>
          <ArticleReviewForm/>
        </div>
      </div>
  );
}
