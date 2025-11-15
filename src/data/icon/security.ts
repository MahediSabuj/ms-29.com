import { IconItem } from "@/types/icon";

import owaspIcon from "@/assets/icon/security/owasp.png";

const OWASP : IconItem = {
  name: "OWASP",
  category: "Security",
  filename: "owasp.png",
  description: "Open Web Application Security Project for web security standards",
  tags: ["security", "owasp", "web security", "vulnerabilities", "standards"],
  hasImage: true,
  imageSrc: owaspIcon
}

export const SECURITY = [
  OWASP
];
