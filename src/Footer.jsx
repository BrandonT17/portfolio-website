import React, { useState } from "react";
import { MouseEvent } from "react";

function randomMessage() {
  console.log("message");
  return;
}

function Footer() {
  return (
    <>
      <div className="footer-box">
        <button className="randomize-button">Click to generate new message!</button>
      </div>
      <footer>
        <p>
          Copyright {new Date().getFullYear()} Brandon Thach // Inspired by
          Terry Davis's Temple OS
        </p>
      </footer>
    </>
  );
}

export default Footer;
