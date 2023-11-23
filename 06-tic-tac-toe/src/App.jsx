import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((currentActivePlayer) => currentActivePlayer === "X" ? "O" : "X");
    setGameTurns(previousTurns => {
      let currentPlayer = "X";

      if (previousTurns.length > 0 && previousTurns[0].player === "X") {
        currentPlayer = "O";
      }

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex}, player: currentPlayer },
        ...previousTurns
      ];
      return updatedTurns;
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          {/* here we output the "Player" component: */}
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare}
        turns={gameTurns}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;

/*
<main></main> is the the warpper of the main content of the page (the different building blocks)

for the styling purposes:
- inside the <div> to game container there are the players aand the game board
- outside the <div> there is the game log

we add <span> for the styling purposes

WERE THERE ARE REPETITIONS WE SHOULD USE COMPONENTS. THAT'S WHAT REACT IS ALL ABOUT!
--> easier maintenance, debugging, modification, etc.

*/
