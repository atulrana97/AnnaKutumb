import React from "react";
import styles from "./styles.module.css";

export default function Banner() {
  return (
    <div className={styles.BannerWrapper}>
      <div className={styles.MainImage}>
        <p className={styles.MainImageText}>Comming Soon</p>
        <img
          height="400"
          width="600"
          src={process.env.PUBLIC_URL + "/assets/thirteen.jpeg"}
        />
      </div>
      <div className={styles.BottomDiv}>
        <p className={styles.BottomDivText}>By Om Prakash Rana</p>
      </div>
    </div>
  );
}
