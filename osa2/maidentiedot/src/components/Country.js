const Country = ({ countryList }) => {

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
                    <img src={country.flags.png} />
                </div>
            )}
        </>
    )
}

export default Country