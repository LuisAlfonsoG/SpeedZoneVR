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
        <div class="container">
          <ul class="navbar-nav">
            <div class="nav-item">
              <Link class="nav-link" href="/">
                Inicio
              </Link>
            </div>
          </ul>
          <ul class="navbar-nav">
            <div class="nav-item">
              <Link class="nav-link" href="/#us" scroll={false}>
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
          <ul class="navbar-nav">
            <div class="nav-item">
              <Link class="nav-link" href="/#services" scroll={false}>
                Servicios
              </Link>
            </div>
          </ul>
          <ul class="navbar-nav">
            <div class="nav-item">
              <Link class="nav-link" href="/#promotions" scroll={false}>
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
  return (
    <>
      <div
        class={`${styles.apply_variable} offcanvas offcanvas-start`}
        id="demo"
      >
        <div class="offcanvas-header justify-content-end">
          <button
            type="button"
            className={`${styles.apply_variable} btn text-reset`}
            data-bs-dismiss="offcanvas"
          >
            <i className={`${styles.icon} bi bi-x-lg`}></i>
          </button>
        </div>
        <div class="offcanvas-body">
          <Link class="nav-link mb-2" href="/">
            Inicio
          </Link>
          <Link class="nav-link mb-2" href="/#us" >
            Nosotros
          </Link>
          <Link class="nav-link mb-2" href="/#services" >
            Servicios
          </Link>
          <Link class="nav-link" href="/#promotions" >
            Promociones
          </Link>
        </div>
      </div>
      <nav
        className={`${styles.apply_variable} navbar nav-justified navbar-expand-lg fixed-top`}
      >
        <div className="container-fluid justify-content-between">
          <button
            className={`${styles.button} btn`}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#demo"
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
