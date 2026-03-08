"use client";

import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface CountdownTimerProps {
  targetDate: string;
  targetTime: string;
}

export default function CountdownTimer({ targetDate, targetTime }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Parse time like "09:00 AM - 05:00 PM" → take start time and convert to 24-hour
    const startTimePart = targetTime.split(" - ")[0].trim(); // "09:00 AM"
    const [hhmm, meridiem] = startTimePart.split(" ");
    const [hoursStr, minutesStr] = hhmm.split(":");
    let hours = parseInt(hoursStr, 10);
    const minutes = parseInt(minutesStr, 10);
    if (meridiem === "PM" && hours !== 12) hours += 12;
    if (meridiem === "AM" && hours === 12) hours = 0;
    const hours24 = String(hours).padStart(2, "0");
    const mins24 = String(minutes).padStart(2, "0");
    const target = new Date(`${targetDate}T${hours24}:${mins24}:00`);

    const interval = setInterval(() => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate, targetTime]);

  if (!mounted) return null;

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.minutes },
    { label: "Secs", value: timeLeft.seconds },
  ];

  return (
    <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
      <div className="flex items-center gap-2 mb-4">
        <Clock size={16} className="text-blue-600" />
        <span className="text-blue-800 font-semibold text-sm">Drive starts in</span>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {units.map(({ label, value }) => (
          <div key={label} className="text-center">
            <div className="bg-white rounded-xl p-3 shadow-sm border border-blue-100">
              <span className="text-blue-700 font-black text-2xl tabular-nums">
                {String(value).padStart(2, "0")}
              </span>
            </div>
            <span className="text-blue-500 text-xs font-medium mt-1 block">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
