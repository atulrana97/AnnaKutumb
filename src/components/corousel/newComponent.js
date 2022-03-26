import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

export default function NewComponent() {
  const [imageNumber, setImageNumber] = useState(0);
  const imageLists = [
    `${process.env.PUBLIC_URL}/assets/one.jpeg`,
    `${process.env.PUBLIC_URL}/assets/two.jpeg`,
    `${process.env.PUBLIC_URL}/assets/three.jpeg`,
    `${process.env.PUBLIC_URL}/assets/four.jpeg`,
    `${process.env.PUBLIC_URL}/assets/five.jpeg`,
    `${process.env.PUBLIC_URL}/assets/six.jpeg`,
    `${process.env.PUBLIC_URL}/assets/seven.jpeg`,
    `${process.env.PUBLIC_URL}/assets/eight.jpeg`,
    `${process.env.PUBLIC_URL}/assets/nine.jpeg`,
    `${process.env.PUBLIC_URL}/assets/ten.jpeg`,
    `${process.env.PUBLIC_URL}/assets/eleven.jpeg`,
    `${process.env.PUBLIC_URL}/assets/twelve.jpeg`,
  ];
  useEffect(() => {
    const interval = setInterval(
      () =>
        setImageNumber((prev) => {
          if (prev === 9) {
            return 0;
          } else {
            return prev + 1;
          }
        }),
      3000
    );
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.TabularWrapper}>
      <img
        className={styles.fadeInImage}
        height="600"
        width="400"
        src={imageLists[imageNumber]}
      />
      <img
        className={styles.fadeInImage}
        height="600"
        width="400"
        src={imageLists[imageNumber + 1]}
      />
      <img
        className={styles.fadeInImage}
        height="600"
        width="400"
        src={imageLists[imageNumber + 2]}
      />
    </div>
  );
}
