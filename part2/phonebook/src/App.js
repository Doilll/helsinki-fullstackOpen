import {useState,useEffect} from 'react'
import './App.css';
import api from './api.js'

function App() {
  const [person,setPerson] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')
  const [addNotif,setAddNotif] = useState(null)

  useEffect(() => {
    api.getAll()
    .then(res => setPerson(res))
    .catch(error => console.log(error))
  },[person])

  function onSubmitPerson() {
    const newPerson = {name: newName,number: newNumber}
    const found = person.find(p => p.name === newName)
    if(found){
      const confirm = window.confirm(`${found.name} is already existed do you want to change the number?`)
      if(confirm){
        api.update(found.id,newPerson)
        .then(res => {
          setPerson(person => person.map(p => p.id === found.id ? res.data : p))
          console.log("berhasil diupdate")})
        .catch(error => console.log(error))
      }
      else{console.log("canceled")}
    }
    else {
      api.create(newPerson)
      .then(() => setPerson([...person,newPerson]))
      .catch(error => console.log(error))
      console.log("object added")
      setAddNotif(`${newName} has been to the server`)
      setTimeout(() => {setAddNotif(null)},3000)
    }
    setNewName('')
    setNewNumber('')
  }

  function onChangeName(e) {
    e.preventDefault()
    setNewName(e.target.value)
  }

  function onChangeNumber(e) {
    e.preventDefault()
    setNewNumber(e.target.value)
  }

  function searchQuery(e) {
    setSearchName(e.target.value)
  }

  function deletePerson(id) {
    const confirmed = window.confirm("u sure?")
    if(confirmed) {
      api.drop(id)
      .then(() => setPerson([...person]))
      .catch(error => console.log(error))
    } else {
      console.log("gajadi hapus")
    }
  }

  const filteredPerson = () => {
    return person.filter(p => p.name.toLowerCase().includes(searchName.toLowerCase()))
  }

  return (
    <div className="App">
      <h1>phonebook</h1>
      <Filter filter={searchQuery} type='text' placeholder='search person' value={searchName} />
      <form>
        <DataForm label="name" onChange={onChangeName} type="text" value={newName} placeholder="your name" />
        <DataForm label="number" onChange={onChangeNumber} type="text" value={newNumber} placeholder="yournumber"  />
        <button type='button' onClick={onSubmitPerson}>add</button>
        <h1 className='added'>{addNotif}</h1>
      </form>
      <ul>
        {filteredPerson().map(persons => <li key={`${persons?.id}`}><b>{persons?.name} </b>{persons?.number} <button onClick={() => deletePerson(persons?.id)}>delete</button></li>)}
      </ul>
    </div>
  );
}

function Filter(props) {
  return <input onChange={props.filter} type={props.type} placeholder={props.placeholder} value={props.value} />
}

function DataForm(props) {
  return (
    <div>
      <label>{props.label}</label> <br/>
      <input onChange={props.onChange} type={props.type} value={props.value} placeholder={props.placeholder} />
    </div>
  )
}


export default App;
