import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [ pokemonData, setPokemonData ] = useState([])

    const addPokemon = (addedPokemon) => {
      setPokemonData([...pokemonData, addedPokemon])
    }

    useEffect(() => {
      fetch("http://localhost:3001/pokemon")
        .then(res => res.json())
        .then(data => setPokemonData(data))
    }, [])

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={addPokemon}/>
      <br />
      <Search />
      <br />
      <PokemonCollection pokemons={pokemonData} />
    </Container>
  );
}

export default PokemonPage;
