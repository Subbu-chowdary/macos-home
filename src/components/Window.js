import React, { useState } from "react";
import "./Window.css";
import Draggable from "react-draggable";

const Window = ({ onClose, title, children, style }) => {
  const [windowState, setWindowState] = useState({
    isExpanded: false,
    isMinimized: false,
    isMaximized: false,
    width: 400,
    height: 300,
    navbarHeight: 50, // Example height of the navbar, adjust as needed
  });

  const handleMinimize = () => {
    setWindowState((prev) => ({ ...prev, isMinimized: !prev.isMinimized }));
  };

  const handleMaximize = () => {
    const navbarHeight = 50; // Example height of the navbar, adjust as needed
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    setWindowState({
      isMaximized: true,
      isExpanded: false,
      isMinimized: false,
      width: windowWidth,
      height: windowHeight - navbarHeight,
      navbarHeight: navbarHeight,
    });
  };

  const handleExpand = () => {
    setWindowState((prev) => ({
      ...prev,
      isExpanded: !prev.isExpanded,
      isMinimized: false,
      isMaximized: false,
    }));
  };

  return (
    <Draggable handle=".window-header">
      <div
        className={`window ${windowState.isMinimized ? "minimized" : ""} ${
          windowState.isMaximized ? "maximized" : ""
        } ${windowState.isExpanded ? "expanded" : ""}`}
        style={{
          ...style,
          width: windowState.isMaximized ? "100%" : windowState.width,
          height: windowState.isMaximized ? "100%" : windowState.height,
        }}
      >
        <div className="window-header">
          <span className="window-title">{title}</span>
          <button className="window-expand" onClick={handleExpand}>
            {windowState.isExpanded ? "▼" : "▲"}
          </button>
          <button className="window-minimize" onClick={handleMinimize}>
            -
          </button>
          <button className="window-maximize" onClick={handleMaximize}>
            □
          </button>
          <button className="window-close" onClick={onClose}>
            ✕
          </button>
        </div>
        {!windowState.isMinimized && (
          <div className="window-content">{children}</div>
        )}
      </div>
    </Draggable>
  );
};

export default Window;
