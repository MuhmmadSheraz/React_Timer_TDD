import React from "react";

const Timer = (props: any) => {
return <div>{props.hour}:{props.minute}:{props.second}</div>;
};

export default Timer;
