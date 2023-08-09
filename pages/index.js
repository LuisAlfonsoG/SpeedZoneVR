import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import styles from "./style.module.css";

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
        <div>
          <div className={styles.btns_container}>
            <button className={styles.scroll_btn_left} onClick={leftScroll()}>
              <i className="bi bi-chevron-left"></i>
            </button>
            <button className={styles.scroll_btn_right} onClick={rightScroll()}>
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
          <div className={`${styles.scroll_container}`} id="scrollable">
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
          </div>
        </div>
        <fieldset className={styles.section}>
          <legend className={styles.text_left}>Nuestras promociones</legend>
        </fieldset>
        <fieldset className={styles.section}>
          <legend className={styles.text_right}>Galería</legend>
        </fieldset>
        <fieldset className={styles.section}>
          <legend className={styles.text_left}>Precios</legend>
        </fieldset>
      </div>
      <Footer />
    </>
  );
}

function leftScroll() {
  (document.getElementById("scrollable") as HTMLElement).scrollLeft += 200;
}
function rightScroll() {
  document.querySelector(".scroll_container").scrollLeft -= 200;
}
