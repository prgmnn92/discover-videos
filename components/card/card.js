"use client";
import Image from "next/image";
import styles from "./card.module.css";
import { useState } from "react";

const Card = (props) => {
  const { imgUrl = "/static/clifford.webp", size = "medium" } = props;
  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };
  const [imgSrc, setImgSrc] = useState(imgUrl);
  const handleOnError = () => {
    console.log("hii error");
    setImgSrc("/static/clifford.webp");
  };
  return (
    <div className={styles.container}>
      Card
      <div className={classMap[size]}>
        <Image
          src={imgSrc}
          alt="image"
          fill
          onError={handleOnError}
          className={styles.cardImg}
        />
      </div>
    </div>
  );
};

export default Card;
