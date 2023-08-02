import styles from "./navbar.module.css";

export default function Navbar({}) {
  return (
    <nav
      className={styles.apply_variable}
      class="navbar navbar-expand-sm bg-light navbar-light"
    >
      <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" href="#">
              Inicio
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
