const ListOfCountries = ({ countryList }) => {
    return (
        <div>
            <p>
                {countryList.map(country => {
                    return <span>{country.name.common}<br /></span>
                })}
            </p>
        </div>
    )
}

export default ListOfCountries