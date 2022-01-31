import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {search: ''}

  clickedSuggestion = searchInput => {
    this.setState({search: searchInput})
  }

  changedInput = event => {
    this.setState({search: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {search} = this.state

    return (
      <div className="main-container">
        <div className="sub-container">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
          <div className="search-and-suggestions-container">
            <div className="search-container">
              <img
                className="image2"
                alt="search icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              />
              <input
                type="search"
                className="input"
                value={search}
                onChange={this.changedInput}
              />
            </div>
            <ul className="results-container">
              {suggestionsList.map(eachItem => (
                <SuggestionItem
                  item={eachItem}
                  key={eachItem.id}
                  clickedSuggestion={this.clickedSuggestion}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
