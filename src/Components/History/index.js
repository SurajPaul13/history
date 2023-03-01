import './index.css'
import {Component} from 'react'
import HistoryItem from '../HistoryItem'

class History extends Component {
  constructor(props) {
    super(props)
    const {initialHistoryList} = this.props
    this.state = {
      searchInput: '',
      listItems: initialHistoryList,
    }
  }

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  updateListState = listItems => {
    this.setState({listItems})
  }

  deleteHistory = id => {
    const {listItems} = this.state
    const updatedList = listItems.filter(eachItem => eachItem.id !== id)

    this.setState({listItems: updatedList})
  }

  render() {
    const {searchInput, listItems} = this.state

    const historyList = listItems.filter(eachItem =>
      eachItem.domainUrl.includes(searchInput.toLowerCase()),
    )

    const historyListCard =
      historyList.length !== 0 ? (
        <ul className="history-list">
          {historyList.map(eachItem => (
            <HistoryItem
              key={eachItem.id}
              deleteHistory={this.deleteHistory}
              historyDetails={eachItem}
            />
          ))}
        </ul>
      ) : (
        <p className="no-history">There is no history to show</p>
      )

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
