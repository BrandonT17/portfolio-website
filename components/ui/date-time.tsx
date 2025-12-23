"use client";
import { useState, useEffect } from "react";

export default function DateTime() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // format date and time
  const weekday = dateTime.toLocaleDateString("en-US", { weekday: "short" });
  const dayMonth = dateTime.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
  });
  const time = dateTime.toLocaleTimeString("en-US", { hour12: true });

  return (
    <div>
      {weekday} {dayMonth} {time}
    </div>
  );
}
