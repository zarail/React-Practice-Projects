import { useState } from "react";

export default function Player() {
  let defaultName = "Player";

  const [playerName, setPlayerName] = useState("");
  const [nameSubmitted, setNameSubmitted] = useState(false);

  function handleNameChange(event) {
    setNameSubmitted(false);
    setPlayerName(event.target.value);
  }

  function handleClick() {
    setNameSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {nameSubmitted ? playerName : defaultName}!</h2>
      <p>
        <input
          type="text"
          onChange={handleNameChange}
          value={playerName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
