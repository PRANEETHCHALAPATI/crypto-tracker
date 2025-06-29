// Write your JS code here

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

const CryptocurrenciesList = props => {
  const {cryptoList} = props

  return (
    <div className="crypto-list-container">
      <div className="crypto-header">
        <p className="header-text">Coin Type</p>
        <div className="header-value-container">
          <span className="header-v-text">USD</span>
          <span className="header-v-text">EURO</span>
        </div>
      </div>
      {cryptoList.map(each => (
        <CryptocurrencyItem details={each} key={each.id} />
      ))}
    </div>
  )
}

export default CryptocurrenciesList
 
