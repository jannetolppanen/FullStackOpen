import axios from 'axios'
import { useState, useEffect } from 'react'
import Country from './components/Country'

const App = () => {
  const url = 'https://restcountries.com/v3.1/all'
  const [countryList, setCountryList] = useState([])
  
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

  // const items = countryList.map(item => console.log(item))


  return (
    <div>
      <Country countryList={countryList} />
    </div>
  )



}

export default App;
