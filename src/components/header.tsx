"use client";

import styles from "@/styles/header.module.scss";

export default function Header() {
  return (
    <div className={styles.headerlayout}>
      <div className={styles.profile}>
        <h1>Welcome!</h1>
      </div>
    </div>
  );
}
