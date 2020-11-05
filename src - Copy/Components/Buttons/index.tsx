import React from "react";
import "./actionButton.css"
const Buttons: React.FC<{ title: string; click: () => void }> = ({
  title,
  click,
}) => {
  return (
      <button className="actionBtn" onClick={click}>
        {title}
      </button>
  );
};

export default Buttons;
