// Module was made to .map through a list of many countries but after changes it only takes in one country. Kept functionality the same in case we need it to .map over a bigger list later.

const Country = ({ countryList }) => {

    // returns an empty list of country has no languages listed and prevents react from breaking
    const languageList = (list) => {
        if (list === null || list === undefined) {
            return []
        }
        return (
            Object.values(list)
        )
    }
    return (
        <>
            {countryList.map(country => 
                <div key={country.name.common}>
                    <h2>
                        {country.name.common}
                    </h2>
                    <p>
                        capital {country.capital} <br />
                        lat {country.capitalInfo.latlng[0]} <br />
                        long {country.capitalInfo.latlng[1]}
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
                    <img src={country.flags.png} />
                </div>
            )}
        </>
    )
}

export default Country