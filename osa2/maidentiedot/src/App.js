import axios from 'axios'
import { useState, useEffect } from 'react'
import Country from './components/Country'
import Searchbar from './components/Searchbar'
import ListOfCountries from './components/ListOfCountries'

const App = () => {
  const url = 'https://restcountries.com/v3.1/all'
  const [countryList, setCountryList] = useState([])
  
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



  return (
    <div>
      <Searchbar />
      <ListOfCountries countryList={countryList} />
      {/* <Country countryList={countryList} /> */}
    </div>
  )



}

export default App;
