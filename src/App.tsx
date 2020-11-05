import React, { useState } from "react";
import "./App.css";
import Timer from "./View/Timer";
function App() {
  return (
    <div className="mainDiv">
      <div className="subDiv">
        <div className="timerDiv">
          <h1
            style={{
              color: "white",
              textAlign: "center",
              paddingTop: "30px",
              fontWeight: "bold",
            }}
          >
            React Timer App
          </h1>
          <div className="hello">
            <Timer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
