export default function ResultModal(result, targetTime) {
  return <dialog open> {/* has built-in styling & features */}
    <h2>You {result}!</h2>
    <p>The target time was <strong>{targetTime}</strong> seconds.</p>
    <p>You stopped the timer with <strong>X seconds left</strong>.</p>
    <form method="dialog">
      <button>Close</button> {/* this will close the dialog */}
    </form>
  </dialog>
}
