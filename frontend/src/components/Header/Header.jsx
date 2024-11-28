import React from "react";
import "./Header.css";
import Menu from "./Menu.jsx";
import ToggleTheme from "./ToggleTheme.jsx";

function Header() {
  return (
    <header>
      <h1>Portfolio</h1>
      <Menu></Menu>
      <ToggleTheme></ToggleTheme>
    </header>
  );
}

export default Header;
