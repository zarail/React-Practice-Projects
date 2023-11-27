export default function GameBoard({ onSelectSquare, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
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
