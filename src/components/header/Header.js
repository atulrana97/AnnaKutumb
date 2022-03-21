import React from "react";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <div className={styles.HeaderWrapper}>
      <p className={styles.Heading}>
        Anna<span className={styles.subHeading}>Kutumb</span>
      </p>
    </div>
  );
}
