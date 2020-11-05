import React from "react";
import "./timer.css";
const Timer = (props: any) => {
  return (
    <div className="timeBox">
      {props.hour}:{props.minute}:{props.second}
    </div>
  );
};

export default Timer;
