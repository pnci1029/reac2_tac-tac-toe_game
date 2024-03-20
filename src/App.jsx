import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import {useState} from "react";
import Log from "./components/Log";

function App() {
    const [activePlayer, setActivePlayer] = useState('X');
    const [gameTurns, setGameTurns] = useState([]);

    function handleActivePlayer(rowIndex, colIndex) {
        setActivePlayer((playerState) => playerState === 'X' ? 'O' : 'X');
        setGameTurns((prevTurns) =>{
            let currentPlayer = 'X';

            if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
                currentPlayer = 'O';
            }

            return [{square: {row: rowIndex, col: colIndex}, player: currentPlayer},
                ...prevTurns];
        });
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
                    <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
                </ol>
                <GameBoard onSelectSquare={handleActivePlayer} turns={gameTurns}/>
            </div>
            <Log />
        </main>
    );
}

export default App
