import axios from 'axios'
import { useState, useEffect } from 'react'
// import Country from './components/Country'
import Searchbar from './components/Searchbar'
import ListOfCountries from './components/ListOfCountries'

const App = () => {
  const url = 'https://restcountries.com/v3.1/all'
  const [countryList, setCountryList] = useState([])
  const [filter, setFilter] = useState("")
  
  // Pull restcountries.com to countryList
  const hook = () => {
    axios.get(url)
    .then( res => {
      setCountryList(res.data)
    })
    .catch(error => {
      console.log(error)
    })
  }
  useEffect(hook, [])

  const handleSearchChange = (event) => {
    setFilter(event.target.value)
    console.log(`filter: ${filter}`)
  }



  return (
    <div>
      <Searchbar handleSearchChange={handleSearchChange} />
      <ListOfCountries countryList={countryList} filter={filter} />
    </div>
  )



}

export default App;
