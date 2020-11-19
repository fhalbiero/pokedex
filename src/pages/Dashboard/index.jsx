import React, { useEffect } from 'react';

import Navbar from '../../components/Navbar';
import Card from '../../components/Card';
import api from '../../services/api';

import { usePokemons } from '../../context/pokemons';

import { Container } from './styles';


const Dashboard = () => {

  const { pokemons } = usePokemons();
  

  if (!pokemons) {
    return null;
  }

  return (
    <>
      <Navbar />
      <Container>  
          <main>
              {pokemons && pokemons.map(pokemon => <Card pokemon={pokemon}/>)}
          </main>
      </Container>
    </>
  );
}

export default Dashboard;
