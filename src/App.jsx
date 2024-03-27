import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import {useState} from "react";
import Log from "./components/Log";
import {WINNING_COMBINATIONS} from "./components/WINNING_COMBINATION.jsx";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

function deriveActivePlayer(gameTurns) {
    let currentPlayer = 'X';

    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        currentPlayer = 'O';
    }
    return currentPlayer;
}

function App() {
    const [gameTurns, setGameTurns] = useState([]);
    const activePlayer = deriveActivePlayer(gameTurns);
    const [hasWinner, setHasWinner] = useState(false);

    let gameBoard = initialGameBoard;

    for (const turn of gameTurns) {
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row] [col] = player;
    }
    function handleActivePlayer(rowIndex, colIndex) {
        setGameTurns((prevTurns) =>{
            const currentPlayer = deriveActivePlayer(prevTurns);

            return [{square: {row: rowIndex, col: colIndex}, player: currentPlayer},
                ...prevTurns];
        });
    }

    let winner = null;
    for (const combination of WINNING_COMBINATIONS) {

        const firstSquare = gameBoard[combination[0].row][combination[0].column];
        const secondSquare = gameBoard[combination[1].row][combination[1].column];
        const thirdSquare = gameBoard[combination[2].row][combination[2].column];

        if (firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare) {
            winner = firstSquare;
        }
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
                    <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
                </ol>
                {winner && <p>You win {winner}!</p>}
                <GameBoard onSelectSquare={handleActivePlayer} board={gameBoard}/>
            </div>
            <Log turns={gameTurns} />
        </main>
    );
}

export default App
