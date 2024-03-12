// src/components/Desktop.js
import React, { useState } from "react";
import DesktopIcon from "./DesktopIcon";
import Window from "./Window";
import "./Desktop.css";
import Draggable from "react-draggable";

const Desktop = () => {
  // State and functions for the first window
  const [isWindowOpen1, setIsWindowOpen1] = useState(false);

  const openWindow1 = () => {
    setIsWindowOpen1(true);
  };

  const closeWindow1 = () => {
    setIsWindowOpen1(false);
  };

  // State and functions for the second window
  const [isWindowOpen2, setIsWindowOpen2] = useState(false);

  const openWindow2 = () => {
    setIsWindowOpen2(true);
  };

  const closeWindow2 = () => {
    setIsWindowOpen2(false);
  };

  return (
    <div className="desktop">
      <div className="taskbar">
        <div className="taskbar-item">SUBBU CHOWDARY</div>
        <div className="taskbar-item">About</div>
        <div className="taskbar-item">Git</div>
        {/* Add more taskbar items as needed */}
      </div>
      <Draggable>
        <div className="desktop-icons">
          <DesktopIcon
            iconSrc="https://tmpfiles.nohat.cc/full-m2H7G6G6G6N4K9G6.png"
            label="Images"
            onClick={openWindow1}
          />
        </div>
      </Draggable>

      {isWindowOpen1 && (
        <Window
          onClose={closeWindow1}
          onMinimize={() => console.log("Minimize clicked")}
          onMaximize={() => console.log("Maximize clicked")}
          title="My Window 1"
        >
          {/* Content of the window goes here */}
          <p>This is the content of the first window.</p>
        </Window>
      )}

      <Draggable>
        <div className="desktop-icons">
          <DesktopIcon
            iconSrc="https://tmpfiles.nohat.cc/full-m2H7G6G6G6N4K9G6.png"
            label="Images"
            onClick={openWindow2}
          />
        </div>
      </Draggable>

      {isWindowOpen2 && (
        <Window
          onClose={closeWindow2}
          onMinimize={() => console.log("Minimize clicked")}
          onMaximize={() => console.log("Maximize clicked")}
          title="My Window 2"
        >
          {/* Content of the window goes here */}
          <p>This is the content of the second window.</p>
        </Window>
      )}
    </div>
  );
};

export default Desktop;
