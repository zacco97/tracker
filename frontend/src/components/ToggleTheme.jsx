import React from "react";
import { useState, useEffect } from "react";

function ToggleTheme() {
  const [theme, SetTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    SetTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  function handleSetTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    SetTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem("theme", newTheme);
  }
  return (
    <div>
      <div className="grid-item item2">
        Switch to {theme === "light" ? "Dark" : "Light"}
        <input onClick={handleSetTheme} type="checkbox"></input>
        <span className="slider round"></span>
      </div>
    </div>
  );
}

export default ToggleTheme;
