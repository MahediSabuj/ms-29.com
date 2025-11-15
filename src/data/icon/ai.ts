import { IconItem } from "@/types/icon";

import claudeIcon from "@/assets/icon/ai/claude.png";
import cursorIcon from "@/assets/icon/ai/cursor.png";

const CLAUDE : IconItem = {
  name: "Claude",
  category: "AI/ML",
  filename: "claude.png",
  description: "AI assistant by Anthropic for analysis, writing, and coding tasks",
  tags: ["claude", "ai", "anthropic", "llm", "assistant", "chatbot"],
  hasImage: true,
  imageSrc: claudeIcon
}

const CURSOR : IconItem = {
  name: "Cursor",
  category: "AI/ML",
  filename: "cursor.png",
  description: "AI-powered code editor for faster development",
  tags: ["cursor", "ai", "code editor", "ide", "coding assistant", "development"],
  hasImage: true,
  imageSrc: cursorIcon
}

export const AI = [
  CLAUDE,
  CURSOR
];