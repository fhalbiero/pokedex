import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import { usePokemons } from '../../context/pokemons';
import api from '../../services/api';

import { Container } from './styles';


const Navbar = () => {

  const { count, setPokemons } = usePokemons();
  const [ searchText, setSearchText ] = useState(''); 

  const handleClick = async () => { 
      const amoungOfPokemons = searchText.length <= 2 ? 20 : count;

      const response = await api.get(`?limit=${amoungOfPokemons}`);
      const data = response.data.results;
      const foundPokemons = [];
      
      setPokemons([]);

      data.forEach( pokemon => {
        if (pokemon.name.includes(searchText.toLowerCase())) {
          foundPokemons.push(pokemon);
        }
      });
      
      setPokemons(foundPokemons);
      setSearchText('');
  }

  return (
      <Container>
        <h1>Pokédex</h1>
        
        <div className="search">
            <input 
              type="text" 
              placeholder="Search by name" 
              onChange={ e => setSearchText(e.target.value) }
              value={searchText}/>
            <button onClick={handleClick}>
              <FaSearch />
            </button>
        </div>   
      </Container>
  );
}

export default Navbar;