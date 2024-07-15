function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <li>
            <span className="player-name">Player 1</span>
            <span id="player-symbol">X</span>
          </li>
          <li>
            <span className="player-name">Player 2</span>
            <span id="player-symbol">0</span>
          </li>
        </ol>
        Game Board
      </div>
    </main>
  )
}

export default App
