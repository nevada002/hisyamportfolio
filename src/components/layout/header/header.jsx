import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <nav className="navbar">
        <Link className="logo" to="/">
          <strong>Hi</strong>syam
        </Link>
        <ul className="nav-links">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/showcase">Showcase</Link>
          </li>
          <li className="nav-item">
            <Link to="/biography">Biography</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
