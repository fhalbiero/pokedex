import React, { useEffect } from 'react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Card from '../../components/Card';
import api from '../../services/api';

import { usePokemons } from '../../context/pokemons';

import { Container } from './styles';


const Dashboard = () => {

  const { pokemons, setPokemons, nextPage, setNextPage } = usePokemons();
  
  const handleShowMore = async () => {
      const response = await api.get(nextPage);
      setPokemons([...pokemons, ...response.data.results]);
      setNextPage(response.data.next);
  }


  const handlePokemonsByType = async (url) => {
    const response = await api.get(url);

    setPokemons(response.data.pokemon.map( p => p.pokemon));
}

  if (!pokemons.length) {
    return null;
  }

  return (
    <>
      <Navbar />
      <Container>  
          <main>
              {pokemons && pokemons.map(pokemon => <Card handlePokemonsByType={handlePokemonsByType} pokemon={pokemon}/>)}
          </main>
          <footer>
            <button onClick={handleShowMore}>Show me more pokemons</button>
          </footer>
      </Container>
      <Footer />
    </>
  );
}

export default Dashboard;
