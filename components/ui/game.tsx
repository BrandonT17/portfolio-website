"use client";
import { useState, useEffect, useCallback, useMemo } from "react";

const messages: string[][] = [
  ["01101000", "01100101", "01101100", "01101100", "01101111"], // hello
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
  ], // internship
  ["01101100", "01101001", "01101110", "01110101", "01111000"], // linux
  ["01100011", "01101111", "01100100", "01100101"], // code
  ["01101000", "01100101", "01111000"], // hex
  ["01110000", "01111001", "01110100", "01101000", "01101111", "01101110"], // python
  ["01100100", "01100101", "01100010", "01110101", "01100111"], // debug
  ["01110011", "01101000", "01100101", "01101100", "01101100"], // shell
  ["01100010", "01100001", "01110011", "01101000"], // bash
];

function binaryToString(binaryArray: string[]): string {
  return binaryArray
    .map((bin) => String.fromCharCode(parseInt(bin, 2)))
    .join("")
    .trim();
}

function sanitizeInput(input: string): string {
  return input
    .slice(0, 32)
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .trim()
    .toLowerCase();
}

export default function Footer() {
  const [currentMessage, setCurrentMessage] = useState<string[]>([]);
  const [guess, setGuess] = useState("");
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);

  const randomMessage = useCallback(() => {
    const index = Math.floor(Math.random() * messages.length);
    setCurrentMessage(messages[index]);
    setGuess("");
  }, []);

  useEffect(() => {
    randomMessage();
  }, [randomMessage]);

  const decoded = useMemo(
    () => binaryToString(currentMessage),
    [currentMessage]
  );

  const result = useMemo(() => {
    if (!guess) return "";
    const sanitizedGuess = sanitizeInput(guess);
    const sanitizedDecoded = sanitizeInput(decoded);
    const isCorrect = sanitizedGuess === sanitizedDecoded;
    return isCorrect ? "✓ Correct!" : "✗ Incorrect";
  }, [guess, decoded]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (value.toLowerCase() === "new") {
        randomMessage();
        if (guess && guess.toLowerCase() !== "new") {
          setAttempts((prev) => prev + 1);
        }
      } else {
        setGuess(value);
      }
    },
    [randomMessage, guess]
  );

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && guess && guess.toLowerCase() !== "new") {
        const sanitizedGuess = sanitizeInput(guess);
        const sanitizedDecoded = sanitizeInput(decoded);
        const isCorrect = sanitizedGuess === sanitizedDecoded;

        setAttempts((prev) => prev + 1);
        if (isCorrect) {
          setScore((prev) => prev + 1);
          setTimeout(() => {
            randomMessage();
          }, 1000);
        }
      }
    },
    [guess, decoded, randomMessage]
  );

  return (
    <div className="bg-black text-white p-3 font-mono border-6 border-double flex flex-col gap-3">
      <div>
        <span className="text-blue-300">#</span> Binary Decoder Challenge
        <br />
        <span className="text-blue-300">#</span> Decode the binary message using
        ASCII and ENTER your answer!
        <br /> <span className="text-blue-300">#</span> Type '
        <span className="font-bold">new</span>' to generate a new message!
      </div>
      <div>
        {" "}
        {attempts > 0 && (
          <>
            <span className="">$ cat stats.txt</span>
            <br />
            <span className="text-orange-300">
              Score: {score}/{attempts} ({Math.round((score / attempts) * 100)}
              %)
            </span>
            <br />
          </>
        )}
      </div>
      <div>
        $ cat secret-message.txt
        <br />
        {currentMessage.map((byte, i) => (
          <span key={i}>{byte} </span>
        ))}
      </div>

      <div>
        <span className="text-lime-400">guest@bt</span>:
        <span className="text-blue-300">~$</span>{" "}
        <input
          type="text"
          value={guess}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="type answer or 'new'"
          className="bg-black text-white border-none outline-none font-mono"
          maxLength={32}
          autoFocus
        />
        {/* {result && (
          <span
            className={
              result.includes("Correct") ? "text-green-400" : "text-red-400"
            }
          >
            {result}
          </span>
        )} */}
      </div>
    </div>
  );
}
