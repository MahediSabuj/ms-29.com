import Link from "next/link";

import { IconItem } from "@/types/header";

import styles from "./icon-item.module.scss";

export default function IconItemX({ name, url, title, icon } : IconItem) {
  return (
    <Link target="_blank"
      className={`p-2 rounded-xl hover:bg-neutral-100 transition-all duration-300 ${styles.iconItem} ${name}`}
      key={name} href={url}
      title={title}
      aria-label={title}
      dangerouslySetInnerHTML={{__html: icon}}/>
  );
}
