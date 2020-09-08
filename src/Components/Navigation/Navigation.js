import React from "react";
import { NavLink } from "react-router-dom";
import Home from "../../pages/Home";
import AuthForm from "../AuthForm/AuthForm";
import ContactsList from "../contactsList/ContactsList";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/login">LogIn</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
