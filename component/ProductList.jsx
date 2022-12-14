import styles from "../styles/ProductList.module.css";
import SaladCard from "./SaladCard";

const ProductList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST VEGAN CUISINE IN TOWN</h1>
      <p className={styles.desc}>
        VIVA KITCHEN is the best vegan eatry in town, you can eat or take away,
        we can also deliver it at your door step. Viva foods are everyday
        freshely prepared salads, fruits, vegetables. Our eatry is specially
        made for people on a special vegan diet
      </p>
      <div className={styles.wrapper}>
        <SaladCard />
        <SaladCard />
        <SaladCard />
        <SaladCard />
        <SaladCard />
        <SaladCard />
        <SaladCard />
        <SaladCard />
      </div>
    </div>
  );
};

export default ProductList;
