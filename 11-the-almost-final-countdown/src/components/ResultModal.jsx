import { forwardRef, useImperativeHandle, useRef } from 'react'; // allows us to forward the ref from a (parent) component to another (child) component

// forwardRef should wrap the function component that we want to forward the ref to.
// it stores the function in a constant and exports it:

const ResultModal = forwardRef(function ResultModal({ targetTime, remainingTime, onReset }, ref) {

  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  // useImperativeHandle() is a hook that allows us to define which functions and values we want to expose to the parent component:

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal(); // showModal() is bulit-in to show the dialog
      }
    };
  });

  return (
    <dialog ref={dialog} className="result-modal"> {/* has built-in styling & features ... set "open" to make it visible */}
      {userLost && <h2>You lost!</h2>}
      <p>The target time was <strong>{targetTime} seconds</strong>.</p>
      <p>You stopped the timer with {' '} <strong>{formattedRemainingTime} seconds left</strong>.</p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button> {/* this will close the dialog */}
      </form>
    </dialog>
  );
});

export default ResultModal;
