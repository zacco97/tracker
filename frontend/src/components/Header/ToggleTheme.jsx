import React from "react";
import { useState, useEffect } from "react";
import "./ToggleTheme.css";

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
    <div className="toggle-theme">
      <span className="theme-label">
        Switch to {theme === "light" ? "Dark" : "Light"}
      </span>
      <label className="switch">
        <input
          onChange={handleSetTheme}
          type="checkbox"
          checked={theme === "dark"}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default ToggleTheme;
