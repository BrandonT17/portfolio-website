"use client";
import { useState, useEffect } from "react";

export default function DateTime() {
  const [dateTime, setDateTime] = useState<Date | null>(null);

  useEffect(() => {
    const update = () => setDateTime(new Date());

    update(); // set immediately after hydration
    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!dateTime) return null; // or a placeholder

  const weekday = dateTime.toLocaleDateString("en-US", {
    weekday: "short",
  });

  const dayMonth = dateTime.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
  });

  const time = dateTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div>
      {weekday} {dayMonth} {time}
    </div>
  );
}
