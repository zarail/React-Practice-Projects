import { useState } from "react";

// state is data that belongs to a component and may change over time. It's usually used to keep track of user interactions with the UI, such as clicks, hovers, and so on.

export default function App() {
  const [isDeleting, setIsDeleting] = useState(false);
  // isDeleting: state that's either true (the box will be shown) or false (it will not be shown)

  // state is here with "false" initialized, so the <div id="alert">...</div> is not shown by default.

  // This state should be set to true (to later show the warning dialog) whenever the "Delete" <button> is clicked. To achieve this, the onClick prop is added and set to a function that updates the isDeleting state accordingly.

  // const [isActive, setIsActive] = useState(true);

  // The "Proceed" <button> should do the opposite:

  function deleteHandler() {
    setIsDeleting(true);
  }

  function proceedHandler() {
    setIsDeleting(false);
  }

  // the <div id="alert">...</div> is shown conditionally, based on the value of isDeleting:

  return (
    // ternary expression:
    // if isDeleting is true, show the <div id="alert">...</div> (the box), otherwise only show one <button> (the "Delete" button):
    <div>
      {isDeleting ? (
        <div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={proceedHandler}>Proceed</button>
        </div>
      ) : (
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      )}
    </div>
  );
}

/* another alternative is to use &&:

  <div>
    {isDeleting && <div data-testid="alert" id="alert">
      <h2>Are you sure?</h2>
      <p>These changes can't be reverted!</p>
      <button onClick={proceedHandler}>Proceed</button>
    </div>}
    <button onClick={deleteHandler}>Delete</button>
  </div>
*/
