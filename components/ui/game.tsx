"use client";

import { useState, useEffect, useCallback } from "react";

const messages: string[][] = [
  ["01101000", "01100101", "01101100", "01101100", "01101111"],
  [
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
    "00001010",
  ],
  ["01101100", "01101001", "01101110", "01110101", "01111000"],
  ["01100011", "01101111", "01100100", "01100101"],
  ["01101000", "01100101", "01111000"],
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
    <div>
      <div>Decode the binary message and enter your answer!</div>
      <div>
        {currentMessage.map((byte, i) => (
          <span key={i}>{byte} </span>
        ))}
        _
      </div>
      <div className="flex flex-col mt-3 gap-3">
        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Enter your guess"
          className="border p-1"
        />
        <button onClick={randomMessage} className="btn">
          CLICK TO GENERATE NEW MESSAGE
        </button>
      </div>
    </div>
  );
}
