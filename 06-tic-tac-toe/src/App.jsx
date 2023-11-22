import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          {/* here we output the "Player" component: */}
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
      GAME LOG
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
