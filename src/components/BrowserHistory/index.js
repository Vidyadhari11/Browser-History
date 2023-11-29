import './index.css'

const BrowserHistory = props => {
  const {historyDetails, onDeleteHistory} = props
  const {id, timeAccessed, title, logoUrl, domainUrl} = historyDetails

  const onRemoveHistory = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="list-container1">
      <div className="list-container2">
        <p className="time">{timeAccessed}</p>

        <div className="list-container3">
          <img src={logoUrl} alt="domain logo" className="domain-logo" />

          <div className="list-container4">
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
      </div>

      <button
        className="button"
        type="button"
        onClick={onRemoveHistory}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}

export default BrowserHistory
