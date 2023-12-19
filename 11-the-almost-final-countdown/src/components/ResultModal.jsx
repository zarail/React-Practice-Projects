import { forwardRef } from 'react'; // allows us to forward the ref from a (parent) component to another (child) component

// forwardRef should wrap the function component that we want to forward the ref to.
// it stores the function in a constant and exports it:

const ResultModal = forwardRef(function ResultModal({ result, targetTime }, ref) {
  return (
    <dialog ref={ref} className="result-modal"> {/* has built-in styling & features ... set "open" to make it visible */}
      <h2>You {result}!</h2>
      <p>The target time was <strong>{targetTime}</strong> seconds.</p>
      <p>You stopped the timer with <strong>X seconds left</strong>.</p>
      <form method="dialog">
        <button>Close</button> {/* this will close the dialog */}
      </form>
    </dialog>
  )
});

export default ResultModal;
