import './index.css'

const PlayingView = ({choice, onClickChoice}) => {
  const {imageUrl, testId, id} = choice
  const onClickOption = () => {
    onClickChoice(choice)
  }
  return (
    <li className="choice-item">
      <button
        type="button"
        data-testid={testId}
        className="choice-button"
        onClick={onClickOption}
      >
        <img src={imageUrl} alt={id} className="choice-image" />
      </button>
    </li>
  )
}

export default PlayingView
