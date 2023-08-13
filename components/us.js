import styles from "./us.module.css";
import Link from "next/link";
import Image from "next/image";
import { ImArrowUpRight2 } from "react-icons/im";

export default function Us({}) {
  return (
    <>
      <div className={styles.apply_variable}>
        <div clasName={styles.img_container}>
          <div className={styles.square}></div>
          <Image
            src="/Rectangle14.png"
            width={200}
            height={200}
            alt="Image"
            className={styles.image}
          ></Image>
        </div>
        <div className={styles.text_container}>
          <h3>Quiénes somos</h3>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="float-end">
            <Link href={"#"} className={`${styles.text_link}`}>
              <span className={`${styles.icon_bg}`}>
                <ImArrowUpRight2 />
              </span>
              Button
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
