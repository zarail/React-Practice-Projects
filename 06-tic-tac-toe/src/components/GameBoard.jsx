const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

export default function GameBoard({ onSelectSquare, turns }) {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((previuosGameBoard) => {
  //     const updatedBoard = [...previuosGameBoard.map(innerArray => [...innerArray])];
  //     // REMINDER: "..." or the "spread operator" is used to paste in all the existing elements of the old array
  //     // it's highly recommended to "map" (make a copy of the original array) and not to work directly on the original array --> they will be updated in an immutable way (without changing the original array)
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });
  //   onSelectSquare();

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                {/* with this anonymous function we have full control over how onSelectSquare function will be executed */}
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}

/*
() => handleSelectSquare is called an "anonymous function" (a function without a name)
with an anonymous function we have full control over the arguments that are passed to the function (how handleSelectSquare will then be called when it is being called.)
*/
