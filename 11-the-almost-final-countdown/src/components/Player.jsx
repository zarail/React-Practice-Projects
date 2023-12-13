import { useState } from "react";

export default function Player() {
  let name = "Player";
  const [playerName, setPlayerName] = useState();

  return (
    <section id="player">
      <h2>Welcome {name}</h2>
      <p>
        <input
          type="text"
          defaultValue={name}
        />
        <button>Set Name</button>
      </p>
    </section>
  );
}
