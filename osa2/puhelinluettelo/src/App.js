import { useState, useEffect} from 'react'
import axios from 'axios'

const Numbers = ({ persons, filter }) => {
  // Filtteröi personsin newFilter mukaan
  let filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <>
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map(person =>
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        )}
      </ul>
    </>
  )
}

const Filter = ({ newFilter, handleFilterChange }) => {
  return (
    <>
      <form>
        <div>
          filter shown with <input
            value={newFilter}
            onChange={handleFilterChange} />
        </div>
      </form>
    </>
  )
}

const Add = ( {AddPerson, newName, handlePersonChange, newNumber, handleNumberChange } ) => {
  return (
    <>
      <form onSubmit={AddPerson}>
        <div>
          name: <input
            value={newName}
            onChange={handlePersonChange} />
        </div>
        <div>
          number: <input
            value={newNumber}
            onChange={handleNumberChange} />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  )
}

const App = () => {
  // Tallennetaan tänne persons json
  const [persons, setPersons] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  // newName arvo on input kentän arvo
  const [newName, setNewName] = useState('Add new person')
  const [newNumber, setNewNumber] = useState('Add new number')
  const [newFilter, setNewFilter] = useState('')

  //Luo uuden objektin joka lisätään personsiin
  const AddPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    if (persons.some(person => person.name.toLocaleLowerCase() === personObject.name.toLocaleLowerCase())) {
      alert(`${personObject.name} is already added to phonebook `)
    }
    else {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  // Jokaisella merkillä muuttaa newName arvoksi tekstikentän arvon
  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <h1>add a new</h1>
      <Add AddPerson={AddPerson} newName={newName} handlePersonChange={handlePersonChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <Numbers persons={persons} filter={newFilter} />
    </div>
  )
}

export default App