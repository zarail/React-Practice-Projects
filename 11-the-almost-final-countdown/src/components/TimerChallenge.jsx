import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {

  const timer = useRef(); // "timer" constant will be used to store the timer ID
  const dialog = useRef();

  // states to start and stop the timer:
  const [timeRemaining, setTimeremaining] = useState(targetTime * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset () {
    setTimeremaining(targetTime * 1000);
  }

  function handleStart() {
    // JS built-in function: a timer of 1000 milliseconds, that will execute the anonymous function after the timer has run out
    timer.current = setInterval(() => { // setInterval() returns a timer ID that we can store in a variable ... will execute the function it recieves every time the timer runs out (not just once)
      setTimeremaining(prevTimeReamining => prevTimeReamining - 10); // 10 milliseconds = 0.01 seconds
    }, 10); // 1000 milliseconds = 1 second
  }

  function handleStop() {
  // JS built-in function: clearTimerout() --> to stop the timer but it needs a pointer to the timer (its ID) that we want to stop, that's why we need to store the timer in a variable
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>{timerIsActive ? "Stop" : "Start"} Challenge</button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  )
}
