import React, { useState } from "react";
import "./timer.css";
import { timerType, Hour } from "../../Types/index";
import Buttons from "../../Components/Buttons";

const Timer = () => {
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
    <div className="timeBox">
      <span>
        {hours}:{minutes}:{seconds}
      </span>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="allButtons" style={{ display: "flex" }}>
          <Buttons title="Start" click={start} />
          <Buttons title="Reset" click={Reset} />
          <Buttons title="Pause" click={pause} />
        </div>
      </div>
    </div>
  );
};

export default Timer;
