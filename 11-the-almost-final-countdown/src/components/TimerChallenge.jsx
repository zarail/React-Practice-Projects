import { useRef, useState } from "react";

export default function TimerChallenge({ title, targetTime }) {

  const timer = useRef(); // "timer" constant will be used to store the timer ID

  // states to start and stop the timer:
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    // JS built-in function: a timer of 1000 milliseconds, that will execute the anonymous function after the timer has run out
    timer.current = setTimeout(() => { // bcs you always must target the current value of the ref
      setTimerExpired(true);
    }, targetTime * 1000); // the time (that is in milliseconds) should be based on the targetTime prop, so we multiply the targetTime by 1000

    setTimerStarted(true);
  }

  function handleStop() {
  // JS built-in function: clearTimerout() --> to stop the timer but it needs a pointer to the timer (its ID) that we want to stop, that's why we need to store the timer in a variable
    clearTimeout(timer.current);
  }

  return <section className="challenge">
    <h2>{title}</h2>
    {timerExpired && <p>Time is up! You lost!</p>}
    <p className="challenge-time">
      {targetTime} second{targetTime > 1 ? "s" : ""}
    </p>
    <p>
      <button onClick={timerStarted ? handleStop : handleStart}>{timerStarted ? "Stop" : "Start"} Challenge</button>
    </p>
    <p className={timerStarted ? "active" : undefined}>
      {timerStarted ? "Time is running..." : "Timer inactive"}
    </p>
  </section>
}
