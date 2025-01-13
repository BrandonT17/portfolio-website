import React, { useState, useEffect } from "react";
import { MouseEvent } from "react";

function getDate() {
  const today = new Date();
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const day = dayNames[today.getDay()];
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const date = String(today.getDate()).padStart(2, "0");
  return `${day} ${month}/${date}`;
}

function Header() {
  const [currentDate, setCurrentDate] = useState(getDate());
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  // hello button
  const [buttonText, setButtonText] = useState("Ciao.");
  const [isClicked, setIsClicked] = useState(false);
  // theme button
  const [themeText, setThemeText] = useState("Light 光");
  const [currTheme, setTheme] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    setButtonText(isClicked ? "Ciao." : "Hello.");
    console.log("clicked.");
  };

  const toggleTheme = () => {
    console.log("theme button clicked.");
    setTheme(!currTheme);
    setThemeText(currTheme ? "Light 光" : "Dark 闇");
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000); // Update every second

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <header className="t-head">
        
          <button className="hello-button" onClick={handleClick}>
            {buttonText}
          </button>{" "}
          {currentDate} {currentTime}
          <button className="theme-button" onClick={toggleTheme}>
            {themeText}
          </button>
        
      </header>
    </>
  );
}

export default Header;
