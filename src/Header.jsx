import React, { useState } from "react";
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
  const [buttonText, setButtonText] = useState("Ciao.");
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    setButtonText(isClicked ? "Ciao." : "Hello.");
    console.log('clicked.');
  };

  return (
    <>
      <header className="t-head">
        <p>
          <button className="hello-button" onClick={handleClick}>
            {buttonText}
          </button>{" "}
          {currentDate}
        </p>
      </header>
    </>
  );
}

export default Header;
