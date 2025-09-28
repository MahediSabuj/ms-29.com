import { IArticleItem } from "@/types/article";
import TOPICS from "@/data/article/topics";

export const DEVELOPMENT_USING_CLAUDE_CODE: IArticleItem = {
    title: "Development using Claude Code",
    description: `As AI Coding Assistant tools are evolving rapidly, We've been experimenting with different AI-powered development
      tools like GitHub Copilot, Cursor, Claude Code, and others from a development perspective. Recently, I've spent the last 2 months
      diving deep into Claude Code specifically.`,
    url: `${TOPICS.CODING_ASSISTANT.url}/development-using-claude-code`,
    publishDate: "September 14, 2025",
    modifiedDate: "September 14, 2025",
    topics: [ TOPICS.CODING_ASSISTANT ],
    active: true
}

export const CODING_ASSISTANT: IArticleItem[] = [
  DEVELOPMENT_USING_CLAUDE_CODE
].filter(m => m.active);
