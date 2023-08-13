import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import styles from "./style.module.css";
import Promotions from "@/components/promotions";
import Us from "@/components/us.js";
import Prices from "@/components/prices.js";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={`${styles.apply_variable}`}>
        <Image
          src="/background.jpg"
          className={`${styles.bg_image}`}
          layout="fill"
          objectFit="cover"
          alt={`Image`}
        ></Image>
        <div className={`${styles.box}`}>
          <div className={`${styles.parallelogram}`}></div>
          <h1 className={styles.header1}>
            Carreras simuladas, victorias de verdad.
          </h1>
          <h6 className={styles.header2}>
            Vive la experiencia detrás del volante.
          </h6>
          <button className={styles.btn_1}>Button</button>
          <button className={styles.btn_2}>Button</button>
        </div>
        <Promotions />
        <fieldset className={styles.section}>
          <legend className={styles.text_left}>Nuestras promociones</legend>
        </fieldset>
        <Us />
        <fieldset className={styles.section}>
          <legend className={styles.text_right}>Galería</legend>
        </fieldset>
        <fieldset className={styles.section}>
          <legend className={styles.text_left}>Precios</legend>
        </fieldset>
        <Prices />
      </div>
      <Footer />
    </>
  );
}
