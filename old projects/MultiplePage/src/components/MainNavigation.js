import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";
export default function MainNavigation() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <NavLink to="/">LOGO</NavLink>
      </div>
      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => isActive && styles.active}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive && styles.active}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) => isActive && styles.active}
            >
              Services
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
