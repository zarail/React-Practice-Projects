export default function Player({ name, symbol }) {
  return (
    <li>
      {/* the outer spans with className="player" separates player area and the btn for styling */}
      <span className="player">
        <span className="player-name">{name}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button>Edit</button>
    </li>
  );
}

/*
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
*/
