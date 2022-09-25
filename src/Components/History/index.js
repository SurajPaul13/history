import './index.css'
import {Component} from 'react'
import HistoryItem from '../HistoryItem'

class History extends Component {
  state = {searchInput: ''}

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {initialHistoryList} = this.props
    const {searchInput} = this.state
    let historyListCard

    let historyList = initialHistoryList.filter(eachItem =>
      eachItem.domainUrl.includes(searchInput.toLowerCase()),
    )

    const deleteHistory = id => {
      historyList = initialHistoryList.filter(eachItem => eachItem.id !== id)
    }

    if (historyList.length !== 0) {
      historyListCard = (
        <ul className="history-list">
          {historyList.map(eachItem => (
            <HistoryItem
              key={eachItem.id}
              deleteHistory={deleteHistory}
              historyDetails={eachItem}
            />
          ))}
        </ul>
      )
    } else {
      historyListCard = (
        <p className="no-history">There is no history to show</p>
      )
    }

    return (
      <div className="bg-container">
        <div className="header-card">
          <img
            className="history-logo"
            alt="app logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          />
          <div className="input-card">
            <img
              className="search-logo"
              alt="search"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png "
            />
            <input
              className="input-bar"
              type="text"
              placeholder="Search history"
              onChange={this.onSearchInput}
            />
          </div>
        </div>
        <div className="history-section">{historyListCard}</div>
      </div>
    )
  }
}

export default History
