import {useState,useEffect} from 'react'
import './App.css';
import axios from 'axios'

export default function App() {

  const [countries,setCountries] = useState([])
  const [search,setSearch] = useState('')

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
    .then(response => setCountries(response.data))
    .catch(() => console.log("error"))
  },[])

  const searchQuery = (e) => {
    setSearch(e.target.value)
  }

  function filteredCountries() {
    return countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))
  }

  return (
    <div>
      <h1>Data Negara</h1>
      <input type="text" value={search} onChange={searchQuery} placeholder="Cari negara" />
      <ShowCountries countries={filteredCountries()} />
    </div>
  );
}

function ShowCountries({countries}) {
  if(countries.length > 10 || countries.length === 0) {
    return <p>no countries found</p>
  }
  else if(countries.length === 1) {
    return(
      <section>
        <h2>{countries[0].name.common}</h2>
        <p>No.Area: {countries[0].area}</p>
        <p>Population: {countries[0].population}</p>
        <p>Capital: {countries[0].capital}</p>
        <p>Bendera</p>
        <img style={{border: '2px solid black',margin: '5px'}} src={`${countries[0].flags.png}`} alt={`${countries[0].flags.alt}`} />
        <img src={countries[0].coatOfArms.png} alt='lambang' width='150px' />
      </section>
    )
  }

  else {
    return countries.map(country => <p key={`${country.area}`}>{country.name.common}</p>)
  }
}


