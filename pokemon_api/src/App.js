import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [pokemon, setPokemon] = useState([]);

  //  takes in an anonymous callback function and an array of what we want to keep track of, NEED THIS IF THE FUNCTION IS CALLING ITSELF ON LOADING
  // useEffect(() => {
  //   axiosPokemon()
  //   //Empty bracket says "run once" || NEVER PUT STATE AND SETSTATE HERE IT WILL INFINITELY LOOP
  // }, [])

  const fetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
      .then(response => response.json())
      .then(jsonResponse => {
        console.log(jsonResponse)
        setPokemon(jsonResponse)
        content();
      })
      .catch(err => {
        console.log(err);
      })
  }

  const axiosPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
      .then(response => {
        console.log(response.data.results)
        setPokemon(response.data.results)
        content();
      })
      .catch(err => console.log(err))
  }

  // axiosPokemon(); // big crash boye runs forever

  let content = (
    pokemon.length === 0 ?
      <h3> Please wait, loading data</h3>
      :
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th>Pokemon name</th>
          </tr>
        </thead>
        <tbody>
          {
            pokemon.map((poke, i) => (
              <tr key={i}>
                <td>{poke.name}</td>
                <td>{poke.name === "" ? "Unknown" : pokemon.name}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
  )

  return (
    <div className="App">
      <h1>Super Heroes API</h1>
      <hr />
      {content}
      <button onClick={fetchPokemon}>Get Superheroes</button>
      <button onClick={axiosPokemon}>Get Superheroes (axios)</button> 
      {/* <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th>image</th>
            <th>Hero name</th>
            <th>full name</th>
            <th>publisher</th>
            <th>gender</th>
          </tr>
        </thead>
        <tbody>
          {
            heroes.map((hero, i) => (
              <tr key={i}>
                <td><img src={hero.images.xs} alt={`extra small portrait of ${hero.name}`} /></td>
                <td>{hero.name}</td>
                <td>{hero.biography.fullName === "" ? "Unknown" : hero.biography.fullName}</td>
                <td>{hero.biography.publisher}</td>
                <td>{hero.appearance.gender}</td>
              </tr>
            ))
          }
        </tbody>
      </table> */}
    </div>
  );
}

export default App;