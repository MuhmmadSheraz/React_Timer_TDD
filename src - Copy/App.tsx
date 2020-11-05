import React, { useState } from "react";
import "./App.css";
import Timer from "./View/Timer";
import Button from "./Components/Buttons";
import { Hour } from "./Types/index";
function App() {
  let [hours, setHours] = useState<Hour>(0);
  let [minutes, setMinutes] = useState<Hour>(0);
  let [seconds, setSeconds] = useState<Hour>(0);
  let [access, setAccess] = useState<any>();
  let start = () => {
    setAccess(
      setInterval(() => {
        if (seconds > 59) {
          seconds = 0;
          minutes += 1;
          setMinutes(minutes);
        } else if (minutes > 59) {
          hours++;
          setHours(hours);
          minutes = 0;
          seconds = 0;
        } else {
          seconds += 1;
          setSeconds(seconds);
        }
      }, 1000)
    );
  };
  const pause = () => {
    clearInterval(access);
  };
  const Reset = () => {
    clearInterval(access);
    setSeconds(0);
    setHours(0);
    setMinutes(0);
  };

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
            <Timer hour={hours} minute={minutes} second={seconds} />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="allButtons" style={{ display: "flex" }}>
                <Button title="Start" click={start} />
                <Button title="Reset" click={Reset} />
                <Button title="Pause" click={pause} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
