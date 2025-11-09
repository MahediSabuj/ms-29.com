import { Metadata } from "next";
import Link from "next/link";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import Highlight from "@/components/highlight/highlight";
import TOPICS from "@/data/article/topics";
import ArticleReviewList from "@/components/article-review-list/article-review-list";
import ArticleReviewForm from "@/components/form/article-review/article-review";

import { DEVELOPMENT_USING_CLAUDE_CODE as ARTICLE } from "@/data/article/ai/coding-assistant";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const START_CLAUDE_CODE = 
`cd your-project
claude`;

const CLAUDE_MCP_SERVER = 
`claude mcp add \\
  --transport http \\
  context7 https://mcp.context7.com/mcp \\
  --header "CONTEXT7_API_KEY: YOUR_API_KEY"`;

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: TOPICS.CODING_ASSISTANT.title,
    url: TOPICS.CODING_ASSISTANT.url
  }],
  current: ARTICLE.title
}

export default function ClaudeCode() {
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
            As AI Coding Assistant tools are evolving rapidly, we&apos;ve been experimenting with different AI-powered development
            tools like GitHub Copilot, Cursor, Claude Code, and others from a development perspective. Recently, I&apos;ve spent the
            last 2 months diving deep into Claude Code specifically.
          </section>
          <section className="pt-4">
            Different teams and developers are using these tools in various ways, and I wanted to share some insights from our journey.
          </section>
          <section className="pt-4">
            Claude can be used in multiple ways.
            <ul className="list-decimal ml-6 pt-1 pb-2 pl-2.5">
              <li className="mt-2">
                <strong>Web Interface (Claude.ai)</strong>: Web based chat interface for interactive conversations with Claude. No
                installation required and offers both free usage and paid subscription options.
              </li>
              <li className="mt-2">
                <strong>Command Line (Claude Code)</strong>: Terminal based tool for agentic coding and development workflows. Requires paid subscription.
              </li>
              <li className="mt-2">
                <strong>API Integration (Anthropic Console)</strong>: Programmatic access to Claude AI model APIs for custom applications and integrations. Requires paid subscription.
              </li>
            </ul>
            While Claude is available through several different interfaces, in this article, we will focus specifically on Claude Code.
          </section>
          <h2 className="text-xl mt-6">
            <strong>Set up Claude Code</strong>
          </h2>
          <section className="pt-4">
            To install Claude Code, run the following command:
            <Highlight language="bash" code="npm install -g @anthropic-ai/claude-code" path=""/>
            <div className="pt-4">
              After the installation completes, navigate to your project and start Claude Code:
              <Highlight language="bash" code={START_CLAUDE_CODE} path=""/>
            </div>
            <div className="pt-4">
              You will be prompted to login during your first session. Claude Code offers the following authentication options:
              <ul className="list-decimal ml-6 pt-1 pb-2 pl-2.5">
                <li>
                  <strong>Claude account with subscription (Pro, Max, Team or Enterprise)</strong>: Unified subscription that includes both Claude Code 
                  and the web interface. Log in with your Claude.ai account.
                </li>
                <li>
                  <strong>Anthropic Console account (API usage billing)</strong>: Connect through the Claude Console and complete the OAuth process. Requires 
                  active billing at <Link href="https://console.anthropic.com" className="text-blue-600" target="_blank"><strong>console.anthropic.com</strong></Link>.
                </li>
              </ul>
              Once logged into Claude, you can start prompting for development in the terminal.
            </div>
          </section>
          <h2 className="text-xl mt-6">
            <strong>Setting up Project Context</strong>
          </h2>
          <section className="pt-4">
            Assuming you have already created your project, the next step is to create context file (CLAUDE.md). This file serves as comprehensive guideline that
            includes a brief project introduction, technologies and frameworks used, project structure and organization, architecture and design patterns, development
            guidelines and workflows, as well as coding standards, dos and don'ts.
          </section>
          <section className="pt-4">
            Run the following command to automatically create the CLAUDE.md file. This command analyzes the project structure and generates a context file based on your existing codebase.
            <Highlight language="bash" code="/init" path=""/>
            <div className="pt-4">
              Make sure you commit the CLAUDE.md file to your repository so everyone on your team can access and use the same context. Update it regularly, especially after completing each feature or enhancement.
              This ensures that when you prompt Claude for changes, it has the latest information and can accurately follow your project structure and guidelines.
            </div>
          </section>
          <h2 className="text-xl mt-6">
            <strong>Usage in MicroService Project</strong>
          </h2>
          <section className="pt-4">
            In a monorepo setup where your User table schema and frontend coexist, you can simply ask: '<em>Create a registration form using the required User schema fields</em>'. Easy! This works perfectly 
            for single-codebase or modular monolith architectures.
          </section>
          <section className="pt-4">
            But here&apos;s the challenge: What if you have separate repositories for frontend, backend, and microservices? How does Claude understand everything when your code is distributed?
            The answer is simple, add additional working directories! Use this command:
            <Highlight language="bash" code="/add-dir [directory-path]" path=""/>
            <div className="pt-4">
              Now Claude has access to all your microservices. With this setup, Claude can understand the complete context and provide accurate responses across your entire distributed system.
            </div>
          </section>
          <h2 className="text-xl mt-6">
            <strong>MCP Server Integration</strong>
          </h2>
          <section className="pt-4">
            Since AI models work based on their training data, you&apos;ll occasionally find that they don&apos;t have the most up-to-date information about libraries and frameworks. 
            That&apos;s where MCP Servers come in handy!
          </section>
          <section className="pt-4">
            Context7 is one such an MCP Server that provides latest documentation for over 50K libraries. Here&apos;s how to add it to your Claude setup:  
            <Highlight language="bash" code={CLAUDE_MCP_SERVER} path=""/>
            <div className="pt-4">
              The great thing about MCP Servers is that you can add multiple ones for different needs. Follow the same pattern to connect Claude to other specialized MCP Servers based on your use cases.
            </div>
          </section>
          <h2 className="text-xl mt-6">
            <strong>Switching AI Model in Claude Code</strong>
          </h2>
          <section className="pt-4">
            When using Claude Desktop App or the web interface at claude.ai, you have the flexibility to switch between AI models. For example, you can upgrade from Sonnet 4.5 to the more powerful Opus 4.1 whenever 
            you need enhanced capabilities.            
          </section>
          <section className="pt-4">
            With the Claude Code Pro plan, you&apos;re limited to Sonnet and Haiku models. You can only switch between these two. To access Opus, you&apos;ll need to upgrade to the Max Plan.
          </section>
          <section className="pt-4">  
            To Change Models in CLI, run this command:
            <Highlight language="bash" code="/model" path=""/>
            <div className="pt-2">
              This will prompt you to select from the available models for your plan.
              </div>  
          </section>
          <h2 className="text-xl mt-6">
            <strong>Key Lesson Learned</strong>
          </h2>
          <section className="pt-4">
            After using Claude Code extensively, here are the essential lessons that improved my development workflow:
            <ul className="list-disc ml-6 pt-1 pb-2 pl-2.5">
              <li>
                <strong>Provide Clear Context</strong> The better context you provide, the better Claude&apos;s responses. Be specific and detailed in your prompts.
              </li>
              <li>
                <strong>Break Down Complex Tasks</strong> Split big tasks into smaller pieces, makes planning easier and helps get more accurate assistance.
              </li>  
              <li>
                <strong>Verify Everything</strong> Never trust responses blindly. Always test and validate the code before using it.
              </li> 
              <li>
                <strong>Keep Code Clean</strong> Avoid clutter, remove unnecessary code, unused imports, and keep only what&apos;s needed.
              </li> 
              <li>
                <strong>Be Careful with Permissions</strong> Always double check roles, access controls, and security settings before moving forward.
              </li> 
              <li>
                <strong>Commit Only After Verification</strong> Make sure the code works as expected before pushing changes to version control.
              </li> 
              <li>
                <strong>Iterate for Better Results</strong> Don&apos;t expect perfection on the first try. Better results come step by step through iteration.
              </li> 
              <li>
                <strong>Balance Speed with Quality</strong> Quick help is useful, but always review thoroughly to ensure stability and maintainability.
              </li> 
              <li>
                <strong>Collaborate, Don&apos;t Depend Fully</strong> Claude is a powerful tool to enhance your productivity, but remember, human judgment is always key.
              </li>
            </ul>
          </section>
          <section className="pt-6">
            I hope this guide helps you leverage AI agentic tools like Claude Code effectively in your development work. These tools can undoubtedly accelerate your workflow, but 
            let me share an important piece of advice: <em>Wait until you reach at least intermediate level knowledge before depending on AI tools.</em>
          </section>
          <section className="pt-4">
            Here&apos;s why this matters: If you don&apos;t understand what you&apos;re building, you can&apos;t evaluate whether the AI&apos;s suggestions are good or bad. You&apos;ll 
            end up copying code you don&apos;t understand, which creates technical debt and security risks.
          </section>
          <section className="pt-4">
            AI tools amplify your skills but they don&apos;t create them. Invest in your learning first, and these tools will become incredibly powerful allies. 
            Keep learning, keep building, and use AI wisely! 
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
