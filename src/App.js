import React from 'react'

import Dashboard from './pages/Dashboard';
import { PokemonsProvider } from './context/pokemons';

import Global from './styles/global';


function App() {
  return (
    <>
    <Global />
    <PokemonsProvider>
      <Dashboard />
    </PokemonsProvider>
    </>
  );
}

export default App;
