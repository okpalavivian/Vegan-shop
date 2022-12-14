import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ProductList from "../component/ProductList";
import Featured from "../component/Featured";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vegan Kitchen</title>
        <meta name="description" content="Best Vegan Kitchen in Town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <ProductList />
    </div>
  );
};

export default Home;
