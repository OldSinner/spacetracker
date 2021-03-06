import React, { useEffect, useState } from "react";
import { Breakpoint } from "react-socks";

const calculateTimeLeft = (date) => {
  const difference = +date - +new Date();
  let timeLeft = {};
  if (difference > 0) {
    timeLeft = [
      Math.floor(difference / (1000 * 60 * 60 * 24)),
      Math.floor((difference / (1000 * 60 * 60)) % 24),
      Math.floor((difference / 1000 / 60) % 60),
      Math.floor((difference / 1000) % 60),
    ];
  }
  return timeLeft;
};

export default function TimerComponents({ date }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(date));
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(date));
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="timer">
      <div className="timerBlock">
        <div>{("0" + timeLeft[0]).slice(-2)}</div>{" "}
        <Breakpoint medium up>
          <div className="subTimer">Days</div>{" "}
        </Breakpoint>
        <Breakpoint small down>
          <div className="subTimer">D</div>{" "}
        </Breakpoint>
      </div>
      <div>:</div>
      <div className="timerBlock">
        <div>{("0" + timeLeft[1]).slice(-2)}</div>
        <Breakpoint medium up>
          <div className="subTimer">Hours</div>{" "}
        </Breakpoint>
        <Breakpoint small down>
          <div className="subTimer">H</div>{" "}
        </Breakpoint>
      </div>
      <div>:</div>
      <div className="timerBlock">
        <div>{("0" + timeLeft[2]).slice(-2)}</div>{" "}
        <Breakpoint medium up>
          <div className="subTimer">Mins</div>
        </Breakpoint>
        <Breakpoint small down>
          <div className="subTimer">M</div>{" "}
        </Breakpoint>
      </div>
      <div>:</div>
      <div className="timerBlock">
        <div>{("0" + timeLeft[3]).slice(-2)}</div>{" "}
        <Breakpoint medium up>
          <div className="subTimer">Secs</div>
        </Breakpoint>
        <Breakpoint small down>
          <div className="subTimer">S</div>{" "}
        </Breakpoint>
      </div>
    </div>
  );
}
