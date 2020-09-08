import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <nav>
      <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <NavLink
            exact
            to="/"
            className={styles.link}
            activeClassName={styles.linkActive}
          >
            Home
          </NavLink>
        </li>
        <li className={styles.navigationItem}>
          <NavLink
            to="/contacts"
            className={styles.link}
            activeClassName={styles.linkActive}
          >
            Contacts
          </NavLink>
        </li>
        <li className={styles.navigationItem}>
          <NavLink
            to="/register"
            className={styles.link}
            activeClassName={styles.linkActive}
          >
            Register
          </NavLink>
        </li>
        <li className={styles.navigationItem}>
          <NavLink
            to="/login"
            className={styles.link}
            activeClassName={styles.linkActive}
          >
            LogIn
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
