import React, { createContext, useContext, useState } from 'react';
import api from '../services/api';


const PokemonsContext = createContext({});


const PokemonsProvider = ({chieldren}) => {

    const [ pokemons, setPokemons ] = useState([]); 


    return (
         <PokemonsContext.Provider value={{ pokemons, setPokemons }} >
             {chieldren}
         </PokemonsContext.Provider>
    )   
}


const usePokemons = () => {
    const context = useContext(PokemonsContext);

    if (!context) {
        throw new Error('usePokemons must be used within a pokemons provider')
    }

    return context;

}

export { PokemonsProvider, usePokemons }

