import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { connect } from "react-redux";
import authActions from "../../redux/auth/authActions";

function Navigation({ isAuth, onLogout }) {
  // const logOut = onLogout => ({
  //   ...onLogout,
  //   email: "",
  //   token: ""
  // });
  return (
    <nav>
      <ul className={styles.navigation}>
        {isAuth ? (
          <>
            <li className={styles.navigationItem}>
              <NavLink exact to="/" className={styles.link} activeClassName={styles.linkActive}>
                Home
              </NavLink>
            </li>
            <li className={styles.navigationItem}>
              <NavLink to="/contacts" className={styles.link} activeClassName={styles.linkActive}>
                Contacts
              </NavLink>
            </li>
            <li className={styles.navigationItem}>
              <NavLink
                to="/login"
                className={styles.link}
                activeClassName={styles.linkActive}
                onClick={() => {
                  onLogout();
                }}
              >
                LogOut
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li className={styles.navigationItem}>
              <NavLink exact to="/" className={styles.link} activeClassName={styles.linkActive}>
                Home
              </NavLink>
            </li>
            <li className={styles.navigationItem}>
              <NavLink to="/register" className={styles.link} activeClassName={styles.linkActive}>
                Register
              </NavLink>
            </li>
            <li className={styles.navigationItem}>
              <NavLink to="/login" className={styles.link} activeClassName={styles.linkActive}>
                LogIn
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

const mapStateToProps = state => ({
  isAuth: state.auth.onAuth.token
  // onLogout: state.auth.onAuth
});

const mapDispatchToProps = {
  onLogout: authActions.logoutSuccess
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
