"use client";

import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./theme-context";

const themes = [
  { key: "light", label: "Light 光" },
  { key: "templeos", label: "TempleOS 寺" },
  { key: "andrea", label: "Andrea 愛" },
];

export default function ThemeBtn() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const currentIndex = themes.findIndex((t) => t.key === theme);
    setIndex(currentIndex >= 0 ? currentIndex : 0);
  }, [theme]);

  const handleThemeChange = () => {
    const next = (index + 1) % themes.length;
    setIndex(next);
    setTheme(themes[next].key as "light" | "templeos" | "andrea");
  };

  return <button onClick={handleThemeChange}>{themes[index].label}</button>;
}
