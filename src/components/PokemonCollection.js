import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemons }) {
  const { id } = pokemons

  return (
    <Card.Group itemsPerRow={6}>
      <h1> </h1>
        {pokemons.map(pokemon => <PokemonCard key={id} pokemon={pokemon}/>)}  
    </Card.Group>
  );
}

export default PokemonCollection;
