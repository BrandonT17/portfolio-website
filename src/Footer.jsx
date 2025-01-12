import React, { useState, useEffect } from "react";
import { MouseEvent } from "react";

function Footer() {
  const [currentMessage, setCurrentMessage] = useState("");
  const messageList = [
    "01001001 00100000 01101100 01101111 01110110 01100101 00100000 01110000 01110010 01101111 01100111 01110010 01100001 01101101 01101101 01101001 01101110 01100111",
    "01101001 00100000 01101100 01101111 01110110 01100101 00100000 01101100 01101001 01101110 01110101 01111000",
    "01101001 00100000 01101100 01101111 01110110 01100101 00100000 01100011",
    "01101001 00100000 01101000 01100001 01110100 01100101 00100000 01110000 01111001 01110100 01101000 01101111 01101110",
    "01110000 01101100 01100101 01100001 01110011 01100101 00100000 00100000 01101001 01101110 01110100 01100101 01110010 01101110 01110011 01101000 01101001 01110000",
  ];

  const generateRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * messageList.length);
    setCurrentMessage(messageList[randomIndex]);
  };

  useEffect(() => {
    generateRandomMessage();
  }, []);

  return (
    <>
      <div className="footer-box">
        <button className="randomize-button" onClick={generateRandomMessage}>
          Click to generate new message!
        </button>
        <p className="binary-message">{currentMessage}</p>
      </div>
      <footer>
        <p>
          Copyright {new Date().getFullYear()} Brandon Thach <a className="comment">// Inspired by
          Terry Davis's TempleOS (RIP)</a>
        </p>
      </footer>
    </>
  );
}

export default Footer;
