import styles from "./navbar.module.css";

export default function Navbar({}) {
  return (
    <nav
      className={styles.apply_variable}
      class="navbar nav-justified navbar-expand-sm navbar-dark border-bottom border-dark"
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
  );
}
