import {PlayerImage} from './styledComponent'
import './index.css'

const GameResultView = props => {
  const {onClickPlayAgain, result, choice} = props
  return (
    <div className="game-results-container">
      <div className="players-container">
        <div className="player-select-container">
          <p className="player">YOU</p>
          <PlayerImage src={choice[1]} alt="your choice" />
        </div>
        <div className="player-select-container">
          <p className="player">OPPONENT</p>
          <PlayerImage src={choice[0]} alt="opponent choice" />
        </div>
      </div>
      <p className="results">{result}</p>
      <button
        type="button"
        className="play-again-button"
        onClick={() => onClickPlayAgain()}
      >
        PLAY AGAIN
      </button>
    </div>
  )
}

export default GameResultView
