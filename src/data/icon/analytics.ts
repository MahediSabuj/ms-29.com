import { IconItem } from "@/types/icon";

import googleAnalyticsIcon from "@/assets/icon/analytics/google-analytics.png";
import tableauIcon from "@/assets/icon/analytics/tableau.png";
import powerbiIcon from "@/assets/icon/analytics/powerbi.png";
import lookerstudioIcon from "@/assets/icon/analytics/lookerstudio.png";

const GOOGLE_ANALYTICS : IconItem = {
  name: "Google Analytics",
  category: "Analytics",
  filename: "google-analytics.png",
  description: "Web analytics service for tracking and reporting website traffic",
  tags: ["analytics", "google", "web analytics", "tracking", "metrics"],
  hasImage: true,
  imageSrc: googleAnalyticsIcon
}

const TABLEAU : IconItem = {
  name: "Tableau",
  category: "Analytics",
  filename: "tableau.png",
  description: "Business intelligence and data visualization platform",
  tags: ["analytics", "tableau", "data visualization", "bi", "business intelligence"],
  hasImage: true,
  imageSrc: tableauIcon
}

const POWER_BI : IconItem = {
  name: "Power BI",
  category: "Analytics",
  filename: "powerbi.png",
  description: "Microsoft's business analytics and visualization tool",
  tags: ["analytics", "powerbi", "microsoft", "data visualization", "bi", "business intelligence"],
  hasImage: true,
  imageSrc: powerbiIcon
}

const LOOKER_STUDIO : IconItem = {
  name: "Looker Studio",
  category: "Analytics",
  filename: "lookerstudio.png",
  description: "Google's data visualization and reporting platform for creating dashboards",
  tags: ["looker", "looker studio", "google", "data studio", "analytics", "data visualization", "dashboards", "reporting"],
  hasImage: true,
  imageSrc: lookerstudioIcon
}

export const ANALYTICS = [
  GOOGLE_ANALYTICS,
  TABLEAU,
  POWER_BI,
  LOOKER_STUDIO
];