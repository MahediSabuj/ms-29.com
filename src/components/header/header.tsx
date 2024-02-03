import Navigation from "@/components/navigation/navigation";
import IconBar from "@/components/icon-bar/icon-bar";

import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Navigation/>
      <IconBar/>
    </header>
  );
}
