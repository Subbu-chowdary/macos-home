// DesktopIcon.js
import React from "react";

const DesktopIcon = ({ iconSrc, label, onClick }) => {
  return (
    <div className="desktop-icon" onClick={onClick}>
      <img src={iconSrc} alt={label} />
      <span>{label}</span>
    </div>
  );
};

export default DesktopIcon;
