import './index.css'
import {Component} from 'react'
import HistoryItem from '../HistoryItem'

class History extends Component {
  state = {searchInput: '', historyList: ''}

  firstRender = true

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {initialHistoryList} = this.props
    const {searchInput, historyList} = this.state
    let historyListCard

    if (this.firstRender === true) {
      console.log(historyList)
      this.setState({
        historyList: initialHistoryList.filter(eachItem =>
          eachItem.domainUrl.includes(searchInput.toLowerCase()),
        ),
      })
      this.firstRender = false
    }

    const deleteHistory = id => {
      this.setState({
        historyList: historyList.filter(eachItem => eachItem.id !== id),
      })
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
        <p className="no-history"> There is no history to show </p>
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
              type="search"
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
