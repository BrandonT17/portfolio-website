"use client";
import { useState, useEffect } from "react";

const greetings = [
  "你好",
  "Ciao",
  "안녕하세요",
  "مرحبًا",
  "Hola",
  "नमस्ते",
  "សួស្តី",
];

export default function Hello() {
  const [currentGreetingIndex, setGreetingIndex] = useState(greetings[0]);

  const handleGreetingChange = () => {
    const nextIndex =
      (greetings.indexOf(currentGreetingIndex) + 1) % greetings.length;
    setGreetingIndex(greetings[nextIndex]);
  };

  return (
    <button onClick={handleGreetingChange} className="">
      {currentGreetingIndex}
    </button>
  );
}
