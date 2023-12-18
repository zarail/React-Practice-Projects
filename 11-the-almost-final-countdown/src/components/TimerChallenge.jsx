import { useState } from "react";

export default function TimerChallenge({ title, targetTime }) {

  const [timerStarted, setTimerStarted] = useState(false);

  // the state to know once the time is expired:
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    // JS built-in function: a timer of 1000 milliseconds, that will execute the anonymous function after the timer has run out
    setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000); // the time (that is in milliseconds) should be based on the targetTime prop, so we multiply the targetTime by 1000

    setTimerStarted(true);
  }

  return <section className="challenge">
    <h2>{title}</h2>
    {timerExpired && <p>Time is up! You lost!</p>}
    <p className="challenge-time">
      {targetTime} second{targetTime > 1 ? "s" : ""}
    </p>
    <p>
      <button onClick={handleStart}>{timerStarted ? "Stop" : "Start"} Challenge</button>
    </p>
    <p className={timerStarted ? "active" : undefined}>
      {timerStarted ? "Time is running..." : "Timer inactive"}
    </p>
  </section>
}
