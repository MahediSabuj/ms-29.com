import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const SETUP_DEEPSEEK_LOCALLY: IArticleItem = {
    title: "Setup and Configure DeepSeek R1 on Local Environment",
    description: `DeepSeek R1 is a powerful conversational AI model, and integrating it with Chainlit UI allows to create an interactive 
    and user friendly interface. Using Ollama, allows to run LLMs locally, making it simple to deploy and interact with models like DeepSeek R1.`,
    url: `${TOPICS.AI_LLM.url}/setup-deekseek-r1-locally`,
    publishDate: "February 04, 2025",
    modifiedDate: "February 04, 2025",
    topics: [ TOPICS.AI_LLM ],
    active: false
}

export const AI_LLM: IArticleItem[] = [
  SETUP_DEEPSEEK_LOCALLY
].filter(m => m.active);
