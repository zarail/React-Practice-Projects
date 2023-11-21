function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <li>
            <span className="player-name">Player 1</span>
            <span className="player-symbol">X</span>
          </li>
          <li>
            <span className="player-name">Player 2</span>
            <span className="player-symbol">O</span>
          </li>
        </ol>
        GAME BOARD
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

*/
