import { useState, useEffect } from 'react';

import api from './services/api';

function App() {

  const [ pokemons, setPokemons ] = useState([]); 

  useEffect(() => {
    api.get('?offset=0&limit=20')
          .then( response => {
            console.log(response.data.results);
            setPokemons(response.data.results);
          });
  }, [setPokemons]);

  return (
    <>
      <header>
          <h1>POKEDEX</h1>
      </header>
      <main>
          {pokemons && pokemons.map(pokemon => {
            console.log(pokemon);
            return (
              <div></div>
            )
          })}
      </main>
      <footer>

      </footer>
    </>
  );
}

export default App;
