// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {details} = props

  const {currencyName, currencyLogo, usdValue, euroValue} = details

  return (
    <div className="crypto-item">
      <div className="logo-container">
        <img src={currencyLogo} className="logo" alt={currencyName} />
        <p className="coin-name">{currencyName}</p>
      </div>
      <div className="value-container">
        <p className="value">{usdValue}</p>
        <p className="value">{euroValue}</p>
      </div>
    </div>
  )
}

export default CryptocurrencyItem
 
