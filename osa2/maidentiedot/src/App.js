import axios from 'axios'
import { useState, useEffect } from 'react'
import Searchbar from './components/Searchbar'
import ListOfCountries from './components/ListOfCountries'

const App = () => {
  // hardcoded api key, change this before commit


  const url = 'https://restcountries.com/v3.1/all'
  const [countryList, setCountryList] = useState([])
  const [filter, setFilter] = useState("")
  const [forecast, setForecast] = useState("")


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
      <ListOfCountries countryList={countryList} filter={filter} setFilter={setFilter} forecast={forecast} setForecast={setForecast} />
    </div>
  )



}

export default App;
