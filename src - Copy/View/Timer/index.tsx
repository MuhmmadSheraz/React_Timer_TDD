import React from "react";
import "./timer.css";
import { timerType } from "../../Types/index";
const Timer = (props: timerType) => {
  return (
    <div className="timeBox">
      {props.hour}:{props.minute}:{props.second}
    </div>
  );
};

export default Timer;
