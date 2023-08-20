import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

const RulesPopUp = () => {
  const overlayStyles = {
    backgroundColor: '#00000070',
  }
  return (
    <Popup
      modal
      trigger={
        <button className="rule-button" type="button">
          RULES
        </button>
      }
      overlayStyle={overlayStyles}
    >
      {close => (
        <div className="rules-modal">
          <button
            type="button"
            className="close-button"
            onClick={() => close()}
          >
            <RiCloseLine className="close-icon" />
          </button>
          <img
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
            className="rules-image"
          />
        </div>
      )}
    </Popup>
  )
}

export default RulesPopUp
