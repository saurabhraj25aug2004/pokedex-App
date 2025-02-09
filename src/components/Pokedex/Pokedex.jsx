import { useState } from "react";
import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";
import './Pokedex.css';


function Pokedex() {

const [searchTerm,setSearchterm] =useState('');

  return (
    <div className="pokedex-wrapper">
      <Search updateSearchTerm={setSearchterm}/>
     
      {(searchTerm.length == 0) ? <PokemonList /> : ''}
      
    </div>
  );
}

export default Pokedex;
