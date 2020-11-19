import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import pokeball from '../../images/pokeball-open2.png'

import { ContainerCard } from './styles';


const Card = ({pokemon}) => {
  
  const [ pokemonData, setPokemonData ] = useState({});

  useEffect(() => {
    api.get(pokemon.url)
          .then( response => {
            const { name, abilities, base_experience, types, sprites } = response.data;

            const pokemonDetail = {
              name,
              base_experience,
              abilities: abilities.map(ability => ability.ability),
              types: types.map( type => type.type),
              avatar: sprites.other.dream_world.front_default,
              avatar_original: sprites.other['official-artwork'].front_default
            }
            setPokemonData(pokemonDetail);
          });

  }, [setPokemonData]);


  const mouseMoveCard = (e) => {
    const container = document.querySelector(`#container-${pokemonData.name}`);
    const card = document.querySelector(`#card-${pokemonData.name}`);

    var rect = container.getBoundingClientRect();
    var x = (e.clientX - rect.left - 130) / 10; //x position within the element.
    var y = (e.clientY - rect.top - 180) / 10;  //y position within the element.

    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg) `;
  }

  const mouseEnterCard = () => {
    const card = document.querySelector(`#card-${pokemonData.name}`);
    const pokeballImage = document.querySelector(`#pokeball-${pokemonData.name}`);
    const pokemonImage = document.querySelector(`#pokemon-${pokemonData.name}`);
    const main = document.querySelector(`#main-${pokemonData.name}`);

    card.style.transition = `none`;

    pokeballImage.style.transform = ` translateZ(80px) rotateZ(16deg)`;
    pokemonImage.style.transform = ` translateZ(260px) rotateZ(-4deg)`;
    main.style.transform = ` translateZ(48px)`;
  }

  const mouseLeaveCard = () => {
    const card = document.querySelector(`#card-${pokemonData.name}`);
    const pokeballImage = document.querySelector(`#pokeball-${pokemonData.name}`);
    const pokemonImage = document.querySelector(`#pokemon-${pokemonData.name}`);
    const main = document.querySelector(`#main-${pokemonData.name}`);

    card.style.transform = `rotateY(0deg) rotateX(0deg) `;
    card.style.transition = `all 0.5s ease`;

    pokeballImage.style.transform = ` translateZ(0px) rotateZ(0deg)`;
    pokemonImage.style.transform = ` translateZ(0px) rotateZ(0deg)`;
    main.style.transform = ` translateZ(0px)`;
  }

  if (!pokemonData.name) {
    return  null;
  }

  return (
      <ContainerCard 
        id={`container-${pokemonData.name}`}
        onMouseEnter={mouseEnterCard}
        onMouseMove={mouseMoveCard}
        onMouseLeave={mouseLeaveCard}
        experience={pokemonData.base_experience}
      >
        <div className="card" id={`card-${pokemonData.name}`}>

          <div className="image-container">
            <img 
              className="pokeball-image" 
              id={`pokeball-${pokemonData.name}`}
              src={pokeball} 
              alt="pokeball"
            />
            <img 
              className="pokemon-image" 
              id={`pokemon-${pokemonData.name}`}
              src={pokemonData.avatar_original} 
              alt="pokemon"
            />
          </div>
          

          <main id={`main-${pokemonData.name}`} >
            <h2>{pokemonData.name}</h2>

            <div className="experience">
                <h4>Experience</h4>
                <div className="inner-experience">
                  <div>{pokemonData.base_experience}</div>
                </div>
            </div>
            
            <div className="types">
              <h4>Type</h4>
              {pokemonData.types.map( type => <button>{type.name}</button> )}
            </div> 

            <div className="abilities">
              <h4>Abilits</h4>
              {pokemonData.abilities.map( ability => <button>{ability.name}</button> )}
            </div>
          </main>
        </div>
      </ContainerCard>
  );
}

export default Card;