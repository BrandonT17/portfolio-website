"use client";
import { useState } from "react";

const themes = ["Light 光", "TempleOS 寺", "Andrea 愛"];

export default function ThemeBtn() {
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);

  const handleThemeChange = () => {
    const nextIndex = (currentThemeIndex + 1) % themes.length;
    setCurrentThemeIndex(nextIndex);
    // Here you would also add logic to actually change the theme of the app
  };

  return (
    <button onClick={handleThemeChange} className="">
      {themes[currentThemeIndex]}
    </button>
  );
}
