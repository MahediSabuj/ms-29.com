import Link from "next/link";

import { IconItem } from "@/types/header";

import styles from "./icon-item.module.scss";

export default function IconItemX({ name, url, title, icon } : IconItem) {
  return (
    <Link target="_blank"
      className={`${styles.iconItem} ${name}`}
      key={name} href={url}
      title={title}
      aria-label={title}
      dangerouslySetInnerHTML={{__html: icon}}/>
  );
}
