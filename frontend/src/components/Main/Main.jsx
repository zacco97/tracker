import React from "react";
import "./Main.css";
function Main() {
  return (
    <div className="main">
      <div className="flex-container">
        <div className="flex-item">
          <span>Investments</span>
          <span>100€</span>
        </div>
        <div className="flex-item">
          <span>Profits</span>
          <span>100€</span>
        </div>
        <div className="flex-item">
          <span>Expanses</span>
          <span>100€</span>
        </div>
      </div>
      <div className="charts">
        Here you will add some pie charts and otehr charts
      </div>
    </div>
  );
}

export default Main;
