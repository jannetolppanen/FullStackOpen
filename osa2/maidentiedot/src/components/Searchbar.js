const Searchbar = ({ handleSearchChange }) => {
    return (
        <div>
            <form>
                find countries <input onChange={handleSearchChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Searchbar