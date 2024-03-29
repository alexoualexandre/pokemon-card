import { useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'
import NavBar from './components/navBar'
function App() {


  const [pokemonIndex, setPokemon] = useState(0);
  console.log(pokemonIndex);
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
      imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png"
    }
  ];
  const next = (event) => {
    setPokemon(event.target.id.split('_')[1]);
  }

  return (

    <div>
      <NavBar pokemonList={pokemonList} next={next} />
      <PokemonCard name={pokemonList[pokemonIndex].name} imgSrc={pokemonList[pokemonIndex].imgSrc} />

    </div>
  )
}

export default App
