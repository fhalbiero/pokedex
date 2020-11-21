import React, { createContext, useCallback, useContext, useState, useEffect } from 'react';
import api from '../services/api';

const PokemonsContext = createContext({});


const PokemonsProvider = ({children}) => {

    const [ pokemons, setPokemons ] = useState([]); 
    const [ count, setCountPokemons ] = useState([]); 
    const [ nextPage, setNextPage ] = useState(''); 

    useEffect(() => {
        api.get('?offset=0&limit=20')
            .then( response => {
                setCountPokemons(response.data.count);
                setPokemons(response.data.results);
                setNextPage(response.data.next);
            });
    }, []);


    const handlePokemons = useCallback((data) => {
        setPokemons([]);
        setPokemons(data);
    }, [setPokemons, pokemons]);


    return (
        <PokemonsContext.Provider value={{ 
             pokemons, 
             setPokemons: handlePokemons, 
             count, 
             setCountPokemons,
             nextPage,
             setNextPage 
        }} >
             {children}
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

