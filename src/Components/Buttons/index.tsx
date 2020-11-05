import React from "react";
const Buttons: React.FC<{ title: string; click: () => void }> = ({
  title,
  click,
}) => {
  return (
    <div>
      <button onClick={click}>{title}</button>
    </div>
  );
};

export default Buttons;
