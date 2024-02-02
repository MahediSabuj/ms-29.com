import Navigation from "@/component/navigation/navigation";
import IconBar from "@/component/icon-bar/icon-bar";

import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Navigation/>
      <IconBar/>
    </header>
  );
}
