import Link from "next/link";

import { HeaderConfig } from "@/types/header";

import styles from "./icon-bar.module.scss";

export default function IconBar({ socialProfiles } : HeaderConfig) {
  return (
    <div className="flex">
      {socialProfiles.map((item) => {
        return (
          <Link target="_blank"
            className={`${styles.iconItem} ${item.name}`}
            key={item.name} href={item.url}
            title={item.title}
            aria-label={item.title}
            dangerouslySetInnerHTML={{__html: item.icon}}/>
        );
      })}
    </div>
  );
}
