import styles from "./footer.module.css";
import Image from "next/image";

export default function Footer({}) {
  return (
    <>
      <div
        className={`${styles.apply_variable} container-fluid justify-content-center`}
      >
        <div
          className={`row row-cols-1 row-cols-md-2 justify-content-center px-3`}
        >
          <div className={`${styles.column} col mt-3`}>
            <div className={`d-flex mt-2`}>
              <span className={`me-2 align-self-stretch`}>
                <i className={`${styles.icon} bi bi-geo-alt-fill`}></i>
              </span>
              <div className={`align-self-center`}>
                Av. de la Cantera 2361, Local I, Col. Ciudad del Sol, Querétaro,
                México, 76116
              </div>
            </div>
            <div className={`d-flex mt-2`}>
              <span className={`me-2`}>
                <i className={`${styles.icon} bi bi-whatsapp`}></i>
              </span>
              <div className={`align-self-center`}>+52 000-0000</div>
            </div>
            <div className={`d-flex mt-2`}>
              <span className={`me-2`}>
                <i className={`${styles.icon} bi bi-facebook`}></i>
              </span>
              <div className={`align-self-center`}>SpeedZone VR</div>
            </div>
            <div className={`d-flex mt-2`}>
              <span className={`me-2`}>
                <i className={`${styles.icon} bi bi-instagram`}></i>
              </span>
              <div className={`align-self-center`}>speedzonevr</div>
            </div>
            <div className={`d-flex mt-2`}>
              <span className={`me-2`}>
                <i className={`${styles.icon} bi bi-envelope`}></i>
              </span>
              <div className={`align-self-center`}>speedzonevr@gmail.com</div>
            </div>
          </div>
          <div className={`col justify-content-center mt-3 me-2`}>
            <div className={`d-flex justify-content-center`}>
              <Image
                src={`https://motor.elpais.com/wp-content/uploads/2022/01/google-maps-22-1046x616.jpg`}
                width={400}
                height={400}
                alt={`Map`}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
