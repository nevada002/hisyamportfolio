import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <nav className="navbar">
        <NavLink className="logo" to="/">
          <strong>Hi</strong>syam
        </NavLink>
        <ul className="nav-links">
          <li className="nav-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/showcase">Showcase</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/biography">Biography</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
