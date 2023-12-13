import { useState, useRef } from "react"; // importing useState and useRef hooks

// reminder: all hook functions (like useState and useRef) must be called inside the component function.

export default function Player() {
  let defaultName = "Player";

  const playerName = useRef(); // a reference to the input element in the DOM for the player name

  // refs get connected to JSX elements using the "ref" prop, so that the component (here <input>) is connected to the ref (here playerName)

  const [enteredplayerName, setEnteredPlayerName] = useState(null);
  // we don't need the nameSubmitted state anymore, because we can check if the enteredplayerName state is empty or not to know if the name has been submitted or not

  // (we got rid of the handleNameChange function (see the commented-out code at the end of this file) and replaced it with the ref)

  function handleClick() {
    setEnteredPlayerName(playerName.current.value); // to update the enteredplayerName state with the value of the input element
  }

  return (
    <section id="player">
      {/* <h2>Welcome {nameSubmitted ? enteredplayerName : defaultName}!</h2> */}
      {/* alternative ternery (shortcut) to the above line: */}
      {/* --> enteredplayerName if truthy, otherwise defaultName */}
      <h2>Welcome {enteredplayerName ?? defaultName}!</h2>
      <p>
        <input
          // connecting the ref to the input element:
          ref={playerName} // the "ref" is enough to connect the input element to the component
          type="text"
          // got rid of the "onChange" event handler as a result of using the ref
          // got rid of the "value" prop as a result of using the ref
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

/* the code before using ref:

import { useState } from "react"; // importing useState hook

export default function Player() {
  let defaultName = "Player";

  const [enteredplayerName, setEnteredPlayerName] = useState("");
  const [nameSubmitted, setNameSubmitted] = useState(false);

  function handleNameChange(event) {
    setNameSubmitted(false);
    setEnteredPlayerName(event.target.value);
  }

  function handleClick() {
    setNameSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {nameSubmitted ? enteredplayerName : defaultName}!</h2>
      <p>
        <input
          type="text"
          onChange={handleNameChange}
          value={enteredplayerName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

*/
