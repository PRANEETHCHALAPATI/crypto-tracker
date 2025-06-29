// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {cryptoList: [], isLoading: true}

  componentDidMount() {
    this.getCryptoDetails()
  }

  getCryptoDetails = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const formattedData = data.map(each => ({
      id: each.id,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      currencyName: each.currency_name,
      currencyLogo: each.currency_logo,
    }))
    this.setState({cryptoList: formattedData, isLoading: false})
    console.log(data)
  }

  render() {
    const {isLoading, cryptoList} = this.state

    const element = isLoading ? (
      <div data-testid="loader">
        <Loader type="Rings" color="#ffffff" height={500} width={500} />
      </div>
    ) : (
      <>
        <h1 className="main-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="cryptocurrency-logo"
        />
        <CryptocurrenciesList cryptoList={cryptoList} />
      </>
    )

    return <div className="main-container">{element}</div>
  }
}

export default CryptocurrencyTracker
 
