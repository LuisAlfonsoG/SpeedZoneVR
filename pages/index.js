import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import styles from "./style.module.css";
import Promotions from "@/components/promotions";
import Us from "@/components/us.js";
import Prices from "@/components/prices.js";
import Gallery from "@/components/gallery";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={`${styles.apply_variable}`}>
        <div className={styles.bg_image_container}>
          <Image
            src="/background.jpg"
            className={`${styles.bg_image}`}
            layout="fill"
            objectFit="cover"
            alt={`Image`}
          ></Image>
        </div>
        <div className={`${styles.box}`}>
          <div className={`${styles.parallelogram}`}></div>
          <h1 className={styles.header1}>
            Carreras simuladas, <br />
            victorias de verdad.
          </h1>
          <h6 className={styles.header2}>
            Vive la experiencia <br />
            detrás del volante.
          </h6>
          <a href="#services"><button className={styles.btn_1}>Precios</button></a>
          <a className={styles.nav_link} href="#footer"><button className={styles.btn_2}>Reservar</button></a>
        </div>
        <div id="promotions">
          <Promotions />
        </div>
        <fieldset className={styles.section}>
          <legend className={styles.text_left}>Nuestras promociones</legend>
        </fieldset>
        <div id="us">
          <Us />
        </div>
        <fieldset className={styles.section}>
          <legend className={styles.text_right}>Galería</legend>
        </fieldset>
        <Gallery />
        <fieldset className={styles.section}>
          <legend className={styles.text_left}>Precios</legend>
        </fieldset>
        <div id="services">
          <Prices />
        </div>
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}
