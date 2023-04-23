import axios from 'axios'
import { useState, useEffect } from 'react'
// import Country from './components/Country'
import Searchbar from './components/Searchbar'
import ListOfCountries from './components/ListOfCountries'

const App = () => {
  // hardcoded api key, change this before commit


  const url = 'https://restcountries.com/v3.1/all'
  const [countryList, setCountryList] = useState([])
  const [filter, setFilter] = useState("")
  const [capital, setCapital] = useState("")
  const forecastUrl = `http://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=e6c49ed134026b6f31a19e6e1be5f855`

  // Pull restcountries.com to countryList
  const hook = () => {
    axios.get(url)
      .then(res => {
        setCountryList(res.data)
      })
      .catch(error => {
        // console.log(error)
      })
  }
  useEffect(hook, [])



  const handleSearchChange = (event) => {
    setFilter(event.target.value)
  }



  return (
    <div>
      <Searchbar handleSearchChange={handleSearchChange} />
      <ListOfCountries countryList={countryList} filter={filter} setFilter={setFilter} setCapital={setCapital} />
      <p style={{fontSize: 34, color: "red"}}>2.19 is done. 2.20 is still yet to be done. lets get back to it later</p>
    </div>
  )



}

export default App;
