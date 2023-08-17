import styles from "./footer.module.css";

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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.851848013083!2d-100.4932917260781!3d20.634894738744013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d3510158ad96c9%3A0xf0e59e5bc4bf0616!2sAv.%20de%20la%20Cantera%202361-Local%20I%2C%2076116%20Qro.!5e0!3m2!1ses-419!2smx!4v1692295579571!5m2!1ses-419!2smx"
                width="500"
                height="400"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
