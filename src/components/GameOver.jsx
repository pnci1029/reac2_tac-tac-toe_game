export default function GameOver({winner}) {
    let winnerStatus = <p>{winner} win!</p>;
    if (!winner) {
        winnerStatus = <p>draw!</p>
    }
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {winnerStatus}
            <button>rematch?</button>
        </div>
    );
};