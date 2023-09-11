import styles from "./footer.module.css";

export default function Footer({ }) {
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
                Av. de la Cantera 2631-Planta alta Local I,
                Ciudad del sol, 76116 Santiago de Querétaro, Qro.
              </div>
            </div>
            <div className={`d-flex mt-2`}>
              <a className={styles.social_links} href="https://wa.me/+524421136186">
                <span className={`me-2`}>
                  <i className={`${styles.icon} bi bi-whatsapp`}></i>
                </span>
                <div className={`align-self-center`}>+52 442 113 6186</div>
              </a>
            </div>
            <div className={`d-flex mt-2`}>
              <a className={styles.social_links} href="https://www.facebook.com/SpeedZoneVR">
                <span className={`me-2`}>
                  <i className={`${styles.icon} bi bi-facebook`}></i>
                </span>

                <div className={`align-self-center`}>SpeedZone VR</div>
              </a>
            </div>
            <div className={`d-flex mt-2`}>
              <a className={styles.social_links} href="https://www.instagram.com/speedzonevr/">
                <span className={`me-2`}>
                  <i className={`${styles.icon} bi bi-instagram`}></i>
                </span>
                <div className={`align-self-center`}>speedzonevr</div>
              </a>
            </div>
            <div className={`d-flex mt-2`}>
              <span className={`me-2`}>
                <i className={`${styles.icon} bi bi-tiktok`}></i>
              </span>
              <div className={`align-self-center`}>Speed Zone</div>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.743929605549!2d-100.49298352485789!3d20.639291880914428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d3510cbb0ce233%3A0x5bee090713897d85!2sSpeed%20Zone%20VR!5e0!3m2!1ses-419!2smx!4v1694116013716!5m2!1ses-419!2smx"
                width="600"
                height="450"
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
