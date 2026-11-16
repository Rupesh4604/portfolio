import { useEffect, useState } from "react";

const fmt = (tz) =>
  new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: tz });

// Live HH:MM in the given time zone, refreshed every 30s.
export default function useClock(timeZone) {
  const [time, setTime] = useState(() => fmt(timeZone));
  useEffect(() => {
    const id = setInterval(() => setTime(fmt(timeZone)), 30000);
    return () => clearInterval(id);
  }, [timeZone]);
  return time;
}
