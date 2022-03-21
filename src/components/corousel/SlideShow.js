import React from "react";
import styles from "./styles.module.css";

export default function SlideShow() {
  return (
    <div className={styles.SlideShowWrapper}>
      <div className={styles.SliderItemDiv}>
        <img
          height="300"
          width="150"
          src={process.env.PUBLIC_URL + "/assets/three.jpeg"}
        />
      </div>
      <div className={styles.SliderItemDiv}>
        <img
          height="300"
          width="150"
          src={process.env.PUBLIC_URL + "/assets/one.jpeg"}
        />
      </div>
      <div className={styles.SliderItemDiv}>
        <img
          height="300"
          width="150"
          src={process.env.PUBLIC_URL + "/assets/four.jpeg"}
        />
      </div>
      <div className={styles.SliderItemDiv}>
        <img
          height="300"
          width="150"
          src={process.env.PUBLIC_URL + "/assets/two.jpeg"}
        />
      </div>
      <div className={styles.SliderItemDiv}>
        <img
          height="300"
          width="150"
          src={process.env.PUBLIC_URL + "/assets/five.jpeg"}
        />
      </div>
      <div className={styles.SliderItemDiv}>
        <img
          height="300"
          width="150"
          src={process.env.PUBLIC_URL + "/assets/six.jpeg"}
        />
      </div>
      <div className={styles.SliderItemDiv}>
        <img
          height="300"
          width="150"
          src={process.env.PUBLIC_URL + "/assets/seven.jpeg"}
        />
      </div>
      <div className={styles.SliderItemDiv}>
        <img
          height="300"
          width="150"
          src={process.env.PUBLIC_URL + "/assets/eight.jpeg"}
        />
      </div>
      <div className={styles.SliderItemDiv}>
        <img
          height="300"
          width="150"
          src={process.env.PUBLIC_URL + "/assets/nine.jpeg"}
        />
      </div>
      <div className={styles.SliderItemDiv}>
        <img
          height="300"
          width="150"
          src={process.env.PUBLIC_URL + "/assets/ten.jpeg"}
        />
      </div>
      <div className={styles.SliderItemDiv}>
        <img
          height="300"
          width="150"
          src={process.env.PUBLIC_URL + "/assets/eleven.jpeg"}
        />
      </div>
      <div className={styles.SliderItemDiv}>
        <img
          height="300"
          width="150"
          src={process.env.PUBLIC_URL + "/assets/twelve.jpeg"}
        />
      </div>
    </div>
  );
}
