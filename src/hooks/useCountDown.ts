import { useEffect, useState } from "react";

interface ICountDown {
  days: number | string;
  hours: number | string;
  minutes: number | string;
  seconds: number | string;
}
export default function useCountDown(date: number) {
  const [countDown, setCountDown] = useState<ICountDown>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  useEffect(() => {
    const interval = setInterval(() => setNewTime(), 1000);

    return () => clearInterval(interval);
  });

  const setNewTime = () => {
    const now = new Date().getTime();
    const distance = date - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setCountDown({
      days: days || "00",
      hours: hours || "00",
      minutes: minutes || "00",
      seconds: seconds || "00",
    });
  };

  return countDown;
}
