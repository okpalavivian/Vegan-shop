import Image from "next/image";
import styles from "../styles/SaladCard.module.css";

const SaladCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/salad2.png" alt="" width="300" height="300" />

      <h1 className={styles.title}>TOMATO AND AVOCADO SALAD</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
        Freshly Prepared tomatoes, avacado and Lettuse for your delight.
      </p>
      <button>Order now</button>
    </div>
  );
};

export default SaladCard;
