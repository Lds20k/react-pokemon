import React, { useState } from 'react';
import Card from "./components/card/Card";



function App() {
  const [count, setCounter] = useState(1);
  const [pokemon, setPokemon] = useState(0);

  function getPokemon(){
    fetch("https://pokeapi.co/api/v2/pokemon/" + count)
    .then(response => response.json())
    .then(objeto => setPokemon(objeto))
  }

  function counter(){
    setCounter(count + 1)
    getPokemon();
  }

  return (
    pokemon.sprites ?
    <div className="App">
      {(count > 0) ? <Card 
      image={pokemon.sprites.front_default} name={pokemon.name} 
      life={pokemon.stats[0].base_stat}
      attack={pokemon.stats[1].base_stat}
      defense={pokemon.stats[2].base_stat}
      speed={pokemon.stats[3].base_stat}
      /> : null}
      <button onClick={counter}>Proximo</button>
    </div>
    :
    <div>
      <button onClick={counter}>Proximo</button>
    </div>
  )
}

export default App;
