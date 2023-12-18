export default function TimerChallenge({ title, targetTime }) {

  // the state to know once the time is expired:
  const [timeExpired, setTimeExpired] = useState(false);

  function handleStart() {
    // JS built-in function: a timer of 1000 milliseconds, that will execute the anonymous function after the timer has run out
    setTimeout(() => {}, targetTime * 1000); // the time (that is in milliseconds) should be based on the targetTime prop, so we multiply the targetTime by 1000
  }

  return <section className="challenge">
    <h2>{title}</h2>
    <p className="challenge-time">
      {targetTime} second{targetTime > 1 ? "s" : ""}
    </p>
    <p>
      <button>Start Challenge</button>
    </p>
    <p className="">
      Time is running... / Timer inactive
    </p>
  </section>
}
