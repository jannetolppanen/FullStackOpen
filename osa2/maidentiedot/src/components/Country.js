import axios from "axios"
import { useEffect } from "react"
// Module was made to .map through a list of many countries but after changes it only takes in one country. Kept functionality the same in case we need it to .map over a bigger list later.

const Country = ({ countryList, forecast, setForecast }) => {
    const capital = countryList[0].capital[0]
    const forecastUrl = `http://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=e6c49ed134026b6f31a19e6e1be5f855`

    const hook = () => {
        axios.get(forecastUrl)
            .then(res => {
                setForecast(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    useEffect(hook, [])

    // returns an empty list of country has no languages listed and prevents react from breaking
    const languageList = (list) => {
        if (list === null || list === undefined) {
            return []
        }
        return (
            Object.values(list)
        )
    }



    if (forecast) {
        return (
            <>
                {countryList.map(country =>
                    <div key={country.name.common}>
                        <h2>
                            {country.name.common}
                        </h2>
                        <p>
                            capital {country.capital} <br />
                            area {country.area}
                        </p>
                        <h3>
                            languages:
                        </h3>
                        <ul>
                            {languageList(country.languages).map((language, index) =>
                                <li key={index}>
                                    {language}
                                </li>

                            )}
                        </ul>
                        <img src={country.flags.png} /> <br />
                        <h3>
                            Weather in {forecast.name}
                        </h3>
                        <p>
                            temperature {forecast.main.temp} Celsius <br />

                            {forecast.weather.map((weather, index) => (
                                <img key={index} src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="weather icon" />
                            ))} <br />

                            wind {forecast.wind.speed} m/s
                        </p>

                    </div>
                )}
            </>
        )
    } else
        return null
}

export default Country