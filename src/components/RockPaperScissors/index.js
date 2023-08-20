import {Component} from 'react'
import PlayingView from '../PlayingView'
import RulesPopUp from '../RulesPopUp'
import GameResultView from '../GameResultView'
import {Score} from './styleComponent'
import './index.css'

class RockPaperScissors extends Component {
  state = {
    choicesList: [],
    showResults: false,
    score: 0,
    result: '',
    choice: [],
  }

  componentDidMount() {
    const {choicesList} = this.props
    this.setState({choicesList})
  }

  onClickPlayAgain = () => {
    this.setState({showResults: false})
  }

  onClickChoice = choice => {
    const {choicesList} = this.state
    const randomNumber = Math.ceil(Math.random() * 3) - 1
    const opponentChoice = choicesList[randomNumber]
    const opponent = opponentChoice.id
    const your = choice.id
    if (opponent === your) {
      this.setState({
        showResults: true,
        result: 'IT IS DRAW',
        choice: [opponentChoice.imageUrl, choice.imageUrl],
      })
    } else if (
      (your === 'PAPER' && opponent === 'ROCK') ||
      (your === 'SCISSORS' && opponent === 'PAPER') ||
      (your === 'ROCK' && opponent === 'SCISSORS')
    ) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        showResults: true,
        result: 'YOU WON',
        choice: [opponentChoice.imageUrl, choice.imageUrl],
      }))
    } else {
      this.setState(prevState => ({
        score: prevState.score - 1,
        showResults: true,
        result: 'YOU LOSE',
        choice: [opponentChoice.imageUrl, choice.imageUrl],
      }))
    }
  }

  render() {
    const {choicesList, showResults, score, result, choice} = this.state

    return (
      <div className="container">
        <div className="score-logo-con">
          <h1 className="logo-heading">
            ROCK <br />
            PAPER
            <br /> SCISSORS
          </h1>
          <div className="score-con">
            <p className="score-text">Score</p>
            <Score>{score}</Score>
          </div>
        </div>
        {showResults ? (
          <GameResultView
            onClickPlayAgain={this.onClickPlayAgain}
            result={result}
            choice={choice}
          />
        ) : (
          <ul className="choice-list">
            {choicesList.map(eachChoice => (
              <PlayingView
                key={eachChoice.id}
                choice={eachChoice}
                onClickChoice={this.onClickChoice}
              />
            ))}
          </ul>
        )}
        <RulesPopUp />
      </div>
    )
  }
}

export default RockPaperScissors
