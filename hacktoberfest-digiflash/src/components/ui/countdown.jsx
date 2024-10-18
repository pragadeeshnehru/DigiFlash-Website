import React, { useState, useEffect } from "react";

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  }

  return (
    <div className="flex items-start justify-center w-full gap-4 sm:gap-6 md:gap-8 count-down-main px-2 sm:px-4">
      <div className="timer w-12 sm:w-16 md:w-20">
        <div className="bg-indigo-600 py-3 sm:py-4 px-2 rounded-lg overflow-hidden">
          <h3 className="countdown-element days font-Cormorant font-semibold text-lg sm:text-2xl md:text-3xl text-white text-center">
            {timeLeft.days}
          </h3>
        </div>
        <p className="text-sm sm:text-lg font-Cormorant font-medium text-gray-400 mt-1 text-center w-full">
          days
        </p>
      </div>

      <h3 className="font-manrope font-semibold text-lg sm:text-2xl text-gray-400 pt-3">
        :
      </h3>

      <div className="timer w-12 sm:w-16 md:w-20">
        <div className="bg-indigo-600 py-3 sm:py-4 px-2 rounded-lg overflow-hidden">
          <h3 className="countdown-element hours font-Cormorant font-semibold text-lg sm:text-2xl md:text-3xl text-white text-center">
            {timeLeft.hours}
          </h3>
        </div>
        <p className="text-sm sm:text-lg font-Cormorant font-normal text-gray-400 mt-1 text-center w-full">
          hours
        </p>
      </div>

      <h3 className="font-manrope font-semibold text-lg sm:text-2xl text-gray-400 pt-3">
        :
      </h3>

      <div className="timer w-12 sm:w-16 md:w-20">
        <div className="bg-indigo-600 py-3 sm:py-4 px-2 rounded-lg overflow-hidden">
          <h3 className="countdown-element minutes font-Cormorant font-semibold text-lg sm:text-2xl md:text-3xl text-white text-center">
            {timeLeft.minutes}
          </h3>
        </div>
        <p className="text-sm sm:text-lg font-Cormorant font-normal text-gray-400 mt-1 text-center w-full">
          minutes
        </p>
      </div>

      <h3 className="font-manrope font-semibold text-lg sm:text-2xl text-gray-400 pt-3">
        :
      </h3>

      <div className="timer w-12 sm:w-16 md:w-20">
        <div className="bg-indigo-600 py-3 sm:py-4 px-2 rounded-lg overflow-hidden">
          <h3 className="countdown-element seconds font-Cormorant font-semibold text-lg sm:text-2xl md:text-3xl text-white text-center animate-countinsecond">
            {timeLeft.seconds}
          </h3>
        </div>
        <p className="text-sm sm:text-lg font-Cormorant font-normal text-gray-400 mt-1 text-center w-full">
          seconds
        </p>
      </div>
    </div>
  );
};

export default Countdown;
