"use client";

import { useState, useEffect, useCallback } from "react";

const messages: string[][] = [
  [
    "01001001",
    "00100000",
    "01101100",
    "01101111",
    "01110110",
    "01100101",
    "00100000",
    "01110000",
    "01110010",
    "01101111",
    "01100111",
    "01110010",
    "01100001",
    "01101101",
    "01101101",
    "01101001",
    "01101110",
    "01100111",
  ],
  [
    "01101001",
    "00100000",
    "01101100",
    "01101111",
    "01110110",
    "01100101",
    "00100000",
    "01101100",
    "01101001",
    "01101110",
    "01110101",
    "01111000",
  ],
  [
    "01101001",
    "00100000",
    "01101100",
    "01101111",
    "01110110",
    "01100101",
    "00100000",
    "01100011",
  ],
  [
    "01101001",
    "00100000",
    "01101000",
    "01100001",
    "01110100",
    "01100101",
    "00100000",
    "01110000",
    "01111001",
    "01110100",
    "01101000",
    "01101111",
    "01101110",
  ],
  [
    "01110000",
    "01101100",
    "01100101",
    "01100001",
    "01110011",
    "01100101",
    "00100000",
    "00100000",
    "01101001",
    "01101110",
    "01110100",
    "01100101",
    "01110010",
    "01101110",
    "01110011",
    "01101000",
    "01101001",
    "01110000",
  ],
];

export default function Footer() {
  // Start empty to avoid server-client mismatch
  const [currentMessage, setCurrentMessage] = useState<string[]>([]);
  const [guess, setGuess] = useState<string>("");
  const randomMessage = useCallback(() => {
    const index = Math.floor(Math.random() * messages.length);
    setCurrentMessage(messages[index]);
  }, []);

  // Only run on client after mount
  useEffect(() => {
    randomMessage();
  }, [randomMessage]);

  return (
    <>
      <div>
        <button onClick={randomMessage}>Click to generate new message!</button>
        <div>
          {currentMessage.map((byte, i) => (
            <span key={i}>{byte} </span>
          ))}
        </div>
        <div>
          <input
            type="text"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            placeholder="Enter your guess"
          />
        </div>
      </div>
    </>
  );
}
