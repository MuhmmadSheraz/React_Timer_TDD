import React from "react";
import "./actionButton.css"
const Buttons: React.FC<{ title: string; click: () => void }> = ({
  title,
  click,
}) => {
  return (
    <div className="lol">
      <button className="actionBtn" onClick={click}>
        {title}
      </button>
    </div>
  );
};

export default Buttons;
