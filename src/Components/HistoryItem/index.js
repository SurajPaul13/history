import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props

  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const deleteItem = () => {
    deleteHistory(id)
  }

  return (
    <li className="list-item">
      <p className="time">{timeAccessed}</p>
      <div className="history-item-card">
        <img className="logo" src={logoUrl} alt="domain logo" />
        <div className="name-and-delete-container">
          <div className="domain-card">
            <p className="title">{title}</p>
            <p className="domainUrl" id={id}>
              {domainUrl}
            </p>
          </div>
          <button type="button" className="button" onClick={deleteItem}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default HistoryItem
