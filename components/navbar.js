import styles from "./navbar.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar({}) {
  const [windowSize, setWindowSize] = useState(0);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return windowSize[0] > 576 ? <Desktop /> : <Mobile />;
}

function Desktop({}) {
  return (
    <>
      <nav
        className={`${styles.apply_variable} navbar nav-justified navbar-expand-lg fixed-top navbar-dark`}
      >
        <div class="container">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Inicio
              </a>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Catálogos
              </a>
            </li>
          </ul>
          <Image
            src="/SpeedZoneVR-logo.png"
            className="img-fluid"
            width={100}
            height={50}
            alt="Logo"
          ></Image>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Promociones
              </a>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Ubicación
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

function Mobile({}) {
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
          <a class="nav-link mb-2" href="#">
            Inicio
          </a>
          <a class="nav-link mb-2" href="#">
            Catálogos
          </a>
          <a class="nav-link mb-2" href="#">
            Promociones
          </a>
          <a class="nav-link" href="#">
            Ubicación
          </a>
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
