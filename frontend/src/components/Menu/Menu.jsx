import React from "react";
import "./Menu.css";
import { useState } from "react";
function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuToggle() {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  }

  return (
    <nav className="nav">
      <ul className="menu">
        <li>
          <a href="Homepage">Home</a>
        </li>
        <li>
          <a href="Information">About</a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
