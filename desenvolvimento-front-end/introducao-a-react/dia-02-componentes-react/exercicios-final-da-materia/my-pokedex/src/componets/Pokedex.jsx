import React from "react";
import pokemons from "../data";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  render() {
    const todosPokemons = pokemons.map((unidade) => <Pokemon key={unidade.id} uniPokemon = {unidade} />);
    return (
      <div>
        <h1 className="titulo">Pokedex</h1>
        <div className="lista-pokemon">
          {todosPokemons}
        </div>
      </div>
    );
  }
}

export default Pokedex;
