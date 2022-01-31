import './index.css'

const SuggestionItem = props => {
  const {item, clickedSuggestion} = props

  const sendSuggestion = () => {
    clickedSuggestion(item.suggestion)
  }

  return (
    <li className="suggestion-item-container" onClick={sendSuggestion}>
      <p className="para">{item.suggestion}</p>
      <img
        className="image1"
        alt="arrow-icon"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
      />
    </li>
  )
}

export default SuggestionItem
