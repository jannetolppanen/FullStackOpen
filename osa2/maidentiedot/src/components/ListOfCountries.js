import Country from "./Country"
const ListOfCountries = ({ countryList, filter }) => {

    // filter the list with the current search
    let filteredCountries = countryList
        .filter((country => country.name.common.toLowerCase().includes(filter.toLowerCase())))

    // return the names from the filtered list if less than 10 hits
    if (filteredCountries.length > 10) {
        return (
            <div>
                <p>
                    Too many matches, specify another filter
                </p>
            </div>
        )
    }

    // when only 1 hit, we return a single country with more data
    if (filteredCountries.length === 1) {
        return (
            <div>
                <Country countryList={filteredCountries} />
            </div>
        )
    }

    // return a list of hits if we hit something between 2-10
    return (
        <div>
            <p>
                {filteredCountries.map(country => {
                    return <span key={country.name.common}>{country.name.common}<br /></span>
                })}
            </p>
        </div>
    )

}

export default ListOfCountries