import { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/persons'

const Numbers = ({ persons, filter, removePerson }) => {
  // Filtteröi personsin newFilter mukaan
  let filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <>
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map(person =>
          <li key={person.name}>
            {person.name} {person.number} <RemoveButton id={person.id} removePerson={removePerson} />
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

const Add = ({ AddPerson, newName, handlePersonChange, newNumber, handleNumberChange }) => {
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

const RemoveButton = ({ id, removePerson }) => {
  return (
    <>
      <button onClick={() => removePerson(id)}>remove {id} </button>
    </>
  )
}

const App = () => {
  // Tallennetaan tänne persons json
  const [persons, setPersons] = useState([])

  // Haetaan nimilista ensimmmäisen kerran
  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

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
    // Tarkastetaan onko puhelinluettelossa jo saman niminen
    if (persons.some(person => person.name.toLocaleLowerCase() === personObject.name.toLocaleLowerCase())) {
      alert(`${personObject.name} is already added to phonebook `)
    }
    else {
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }
  }
  // Lähetetään deletepyyntö id:n kanssa ja päivitetään persons listalla joka ei sisällä kyseistä id:tä
  const removePerson = (id) => {
    let confirm = window.confirm('Are you sure you want to delete this item?')
    if(confirm){
    axios
      .delete(`http://localhost:3001/persons/${id}`)
      .then(response => {
        setPersons(persons.filter(person => person.id !== id))
      })}
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
      <Numbers persons={persons} filter={newFilter} removePerson={removePerson} />
    </div>
  )
}

export default App