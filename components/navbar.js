import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar({ }) {

  return (
    <>
      <div className={styles.desktop}>
        <Desktop />
      </div>
      <div className={styles.mobile}>
        <Mobile />
      </div>
    </>
  )
}

function Desktop({ }) {
  return (
    <>
      <nav
        className={`${styles.apply_variable} navbar nav-justified navbar-expand-lg fixed-top navbar-dark`}
      >
        <div className="container">
          <ul className="navbar-nav">
            <div className="nav-item">
              <Link className="nav-link" href="/">
                Inicio
              </Link>
            </div>
          </ul>
          <ul className="navbar-nav">
            <div className="nav-item">
              <Link className="nav-link" href="/#us" scroll={false}>
                Nosotros
              </Link>
            </div>
          </ul>
          <Image
            src="/SpeedZoneVR-logo.png"
            className="img-fluid"
            width={100}
            height={50}
            alt="Logo"
          ></Image>
          <ul className="navbar-nav">
            <div className="nav-item">
              <Link className="nav-link" href="/#services" scroll={false}>
                Servicios
              </Link>
            </div>
          </ul>
          <ul className="navbar-nav">
            <div className="nav-item">
              <Link className="nav-link" href="/#promotions" scroll={false}>
                Promociones
              </Link>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}

function Mobile({ }) {
  const [show, setShow] = useState(false);

  return (
    <>
      {show ?
        <div
          className={`${styles.apply_variable} ${styles.responsive_navbar}`}
        >
          <div class={styles.hide_navbar_btn_container}>
            <button
              className={`${styles.apply_variable}  btn text-reset`}
              onClick={() => setShow(false)}
            >
              <i className={`${styles.icon} bi bi-x-lg`}></i>
            </button>
          </div>
          <div className={styles.navlinks_container}>
            <Link onClick={() => setShow(false)} class="nav-link mb-2" href="/">
              Inicio
            </Link>
            <Link onClick={() => setShow(false)} class="nav-link mb-2" href="/#us" >
              Nosotros
            </Link>
            <Link onClick={() => setShow(false)} class="nav-link mb-2" href="/#services" >
              Servicios
            </Link>
            <Link onClick={() => setShow(false)} class="nav-link" href="/#promotions" >
              Promociones
            </Link>
          </div>
        </div> : ''}
      <nav
        className={`${styles.apply_variable} navbar  fixed-top`}
      >
        <div className="container-fluid justify-content-between">
          <button
            className={`${styles.button} btn`}
            type="button"
            onClick={() => setShow(!show)}
          >
            <i className={`${styles.icon} bi bi-list`}></i>
          </button>

          <Image
            src="/SpeedZoneVR-logo.png"
            className="img-fluid"
            width={100}
            height={50}
            alt="Logo"
          ></Image>
          <div className="ms-5"></div>
        </div>
      </nav>
    </>
  );
}
