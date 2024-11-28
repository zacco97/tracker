import React from "react";
import "./Menu.css";
import { useState } from "react";
function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <ul className="menu">
        <li>
          <a href="Homepage">Summary</a>
        </li>
        <li>
          <a href="Information">New Transaction</a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
