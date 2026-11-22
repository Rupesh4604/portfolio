import { useEffect, useState } from "react";

const fmt = (tz) =>
  new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: tz });

// Live HH:MM in the given time zone, refreshed every 30s.
// Starts as "--:--" so the build-time render (prerendered HTML) never freezes a stale time;
// the real time appears as soon as the page runs in the browser.
export default function useClock(timeZone) {
  const [time, setTime] = useState("--:--");
  useEffect(() => {
    setTime(fmt(timeZone));
    const id = setInterval(() => setTime(fmt(timeZone)), 30000);
    return () => clearInterval(id);
  }, [timeZone]);
  return time;
}
