import { useState } from "react"; // we should call "useState" in the function body

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName); //
  const [isEditing, setIsEditing] = useState(false); // array destructuring to store these two elements in separate constants
  // the "isEditing" state can be true/false and will be used to show/hide the input field, and gets initialized with "false" (useState(false))
  // the "setIsEditing" function is used to update the state

  function handleEditClick() {
    setIsEditing(!isEditing); // when the "Edit" btn is clicked, the "isEditing" state will be set to "true" and vice versa --> toggling the state
  }

  function handleNameChange(event) {
    setPlayerName(event.target.value); // the "setPlayerName" function is used to update the state (playerName) ... event.target.value refers to the value of the input field at the time the event occurred.
  }

  return (
    <li>
      {/* the outer spans with className="player" separates player area and the btn for styling */}
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleNameChange}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      {/* the "edit" btn will change to "save" whilst editing (when input field is shwon) --> it will show "save" whilst the input field is visible. when clicked on "save" it will again become "edit".*/}
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      {/* Now we can assign the handler function to this button by adding the onClick prop, which is built into this built-in button component. And we set the "handleEditClick" function as the value for the onClick prop. */}
    </li>
  );
}

/*

*** COMPONENT FUNCTION PROPS ***
to be able to have all the properties of the player we need to pass them as props to the component function: (here "name" and "symbol")

what the component "Player" is replacing:

<li>
  <span className="player">
    <span className="player-name">Player 1</span>
    <span className="player-symbol">X</span>
  </span>
  <button>Edit</button>
</li>
<li>
  <span className="player">
    <span className="player-name">Player 2</span>
    <span className="player-symbol">O</span>
  </span>
  <button>Edit</button>
</li>

*** STATE ***
- as the UI gets updated when data change, we need to manage "state".
- if you got different pieces of state you want to manage you can use the "useState" hook multiple times.

*** (REMINDER) ARRAY DESTRUCTURING ***
const myArray = [1, 2, 3];
const [a, b, c] = myArray;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

*** TOGGLING THE STATE ***
In React, when updating your state "based on the previous value of that state", you should pass a function to that state updating function. (best practice) --> so no toggling and no "!" in front of the state. (as they're scheduled and not executed immediately, so not reliable)
--> setIsEditing((editing) => !editing)); // and it toggles! (the "editing" is just a name of the parameter, it could be anything else)

*** (REMINDER) ARROW FUNCTIONS ***
const myFunction = (a, b) => a + b;
// In the example above, we declare a function myFunction using the arrow function syntax. The function takes two parameters a and b, and returns their sum.

*** onChange ***
onChange will trigger for every keystroke, and it will provide us with an event object that "contains the value that was entered by the user".

*** handleNameChange ***
  function handleNameChange(event) {
    setPlayerName(event.target.value);
  }

This is a JavaScript function that is used to handle changes in the name input field of a form. The function takes an event object as its argument, which contains information about the event that triggered the function. "In this case, the event is a change in the input field."

The function then calls another function called setPlayerName. This function takes the value of the input field as its argument and sets it as the new value of the player name.

Here event.target.value is passed as an argument to the setPlayerName function. This function presumably sets the value of the player name to the value of the input field.

-- event.target.value --

In JavaScript:
- the event object is passed to an event handler function "when an event occurs".
- the event.target property of this object refers to the "element that triggered the event". In this case, the event is a change in the name input field of a form.
- the value property of an input element refers to the "current value of the input field".
--> so, event.target.value refers to the value of the input field at the time the event occurred.

*** TWO-WAY BINDING ***
when we get a value out of an <input> and we feed a value back into it.

*/
