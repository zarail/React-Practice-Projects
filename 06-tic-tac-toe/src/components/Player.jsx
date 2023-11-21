import { useState } from "react"; // we should call "useState" in the function body

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false); // array destructuring to store these two elements in separate constants
  // the "isEditing" state can be true/false and will be used to show/hide the input field, and gets initialized with "false" (useState(false))
  // the "setIsEditing" function is used to update the state

  function handleEditClick() {
    setIsEditing(true); // when the "Edit" btn is clicked, the "isEditing" state will be set to "true"
  }

  return (
    <li>
      {/* the outer spans with className="player" separates player area and the btn for styling */}
      <span className="player">
        {isEditing ? (
          <input type="text" required defaultValue={name} />
        ) : (
          <span className="player-name">{name}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      {/* the "edit" btn will change to "save" whilst editing (when input field is shwon) --> it will show "save" whilst the input field is visible. when clicked on "save" it will again become "edit".*/}
      <button onClick={handleEditClick}>Edit</button>
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
as the UI gets updated when data change, we need to manage "state".

*** (REMINDER) ARRAY DESTRUCTURING ***

const myArray = [1, 2, 3];
const [a, b, c] = myArray;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3


*/
