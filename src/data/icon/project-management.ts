import { IconItem } from "@/types/icon";

import jiraIcon from "@/assets/icon/project-management/jira.png";
import confluenceIcon from "@/assets/icon/project-management/confluence.png";

const JIRA : IconItem = {
  name: "Jira",
  category: "Project Management",
  filename: "jira.png",
  description: "Agile project management and issue tracking platform by Atlassian",
  tags: ["jira", "atlassian", "project management", "issue tracking", "agile", "scrum"],
  hasImage: true,
  imageSrc: jiraIcon
}

const CONFLUENCE : IconItem = {
  name: "Confluence",
  category: "Project Management",
  filename: "confluence.png",
  description: "Team collaboration and documentation platform by Atlassian",
  tags: ["confluence", "atlassian", "documentation", "wiki", "collaboration", "knowledge base"],
  hasImage: true,
  imageSrc: confluenceIcon
}

export const PROJECT_MANAGEMENT = [
  JIRA,
  CONFLUENCE
];