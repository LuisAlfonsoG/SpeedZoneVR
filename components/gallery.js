import styles from "./gallery.module.css";
import Image from "next/image";

export default function Gallery({}) {
  return (
    <>
      <div className={styles.apply_variable}>
        <div className={styles.col} style={{ width: "40%" }}>
          <div className={styles.img_container} style={{ height: "50%" }}>
            <Image
              className={styles.img}
              src="/sm(2).png"
              fill
              objectFit="cover"
              alt="Image"
            ></Image>
            <h6 className={styles.title}>Title 1</h6>
          </div>
          <div className={styles.img_container} style={{ height: "50%" }}>
            <Image
              className={styles.img}
              src="/sm(1).png"
              fill
              objectFit="cover"
              alt="Image"
            ></Image>
            <h6 className={styles.title}>Title 1</h6>
          </div>
        </div>
        <div className={styles.col} style={{ width: "35%" }}>
          <div className={styles.img_container} style={{ height: "70%" }}>
            <Image
              className={styles.img}
              src="/vr(2).png"
              fill
              objectFit="cover"
              alt="Image"
            ></Image>
            <h6 className={styles.title}>Title 1</h6>
          </div>
          <div className={styles.img_container} style={{ height: "30%" }}>
            <Image
              className={styles.img}
              src="/sm.png"
              fill
              objectFit="cover"
              alt="Image"
            ></Image>
            <h6 className={styles.title}>Title 1</h6>
          </div>
        </div>
        <div className={styles.col} style={{ width: "25%" }}>
          <div className={styles.img_container} style={{ height: "50%" }}>
            <Image
              className={styles.img}
              src="/vr(3).png"
              fill
              objectFit="cover"
              alt="Image"
            ></Image>
            <h6 className={styles.title}>Title 1</h6>
          </div>
          <div className={styles.img_container} style={{ height: "50%" }}>
            <Image
              className={styles.img}
              src="/vr.png"
              fill
              objectFit="cover"
              alt="Image"
            ></Image>
            <h6 className={styles.title}>Title 1</h6>
          </div>
        </div>
      </div>
    </>
  );
}
