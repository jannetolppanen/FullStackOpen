import axios from 'axios'
import { useState, useEffect } from 'react'
// import Country from './components/Country'
import Searchbar from './components/Searchbar'
import ListOfCountries from './components/ListOfCountries'

const App = () => {
  // hardcoded api key, change this before commit
  const forecastUrl ='http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=e6c49ed134026b6f31a19e6e1be5f855'
  
  const url = 'https://restcountries.com/v3.1/all'
  const [countryList, setCountryList] = useState([])
  const [filter, setFilter] = useState("")
  const [forecast, setForecast] = useState([])
  
  // Pull restcountries.com to countryList
  const hook = () => {
    axios.get(url)
    .then( res => {
      setCountryList(res.data)
      // console.log(res.data.name.latlng)
    })
    .catch(error => {
      // console.log(error)
    })
  }
  useEffect(hook, [])

  // Pull forecast
  // const forecastHook = () => {
  //   axios.get(forecastUrl)
  //   .then( res => {
  //     setForecast(res.data)
  //   })
  //   .catch(error => {
  //     console.log(`forecast ${error}`)
  //   })
  // }
  // useEffect(forecastHook, [])
  // console.log(forecast)

  const handleSearchChange = (event) => {
    setFilter(event.target.value)
  }



  return (
    <div>
      <Searchbar handleSearchChange={handleSearchChange} />
      <ListOfCountries countryList={countryList} filter={filter} setFilter={setFilter} />
    </div>
  )



}

export default App;
