import { useState, useEffect } from 'react';

import Topbar from '../../components/Topbar';
import Card from '../../components/Card';
import api from '../../services/api';

import { usePokemons } from '../../context/pokemons';

import { Container } from './styles';


const Dashboard = () => {

  const [ pokemons, setPokemons ] = useState([]);

  useEffect(() => {
    api.get('?offset=0&limit=20')
        .then( response => {
            setPokemons(response.data.results);
        });
}, [setPokemons]);
  

  if (!pokemons) {
    return null;
  }

  return (
    <Container>
        <Topbar />
        <main>
            {pokemons && pokemons.map(pokemon => <Card pokemon={pokemon}/>)}
        </main>
        <footer>

        </footer>
    </Container>
  );
}

export default Dashboard;
