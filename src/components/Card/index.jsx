import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import pokeball from '../../images/pokeball-open2.png';
import bugImg from '../../images/bug.svg';
import darkImg from '../../images/dark.svg';
import dragonImg from '../../images/dragon.svg';
import electricImg from '../../images/electric.svg';
import fairyImg from '../../images/fairy.svg';
import fightingImg from '../../images/fighting.svg';
import fireImg from '../../images/fire.svg';
import flyingImg from '../../images/flying.svg';
import ghostImg from '../../images/ghost.svg';
import grassImg from '../../images/grass.svg';
import groundImg from '../../images/ground.svg';
import iceImg from '../../images/ice.svg';
import normalImg from '../../images/normal.svg';
import poisonImg from '../../images/poison.svg';
import psychicImg from '../../images/psychic.svg';
import rockImg from '../../images/rock.svg';
import steelImg from '../../images/steel.svg';
import waterImg from '../../images/water.svg';


import { ContainerCard } from './styles';

const typesImages = {
  bug: bugImg,
  dark: darkImg,
  dragon: dragonImg,
  electric: electricImg,
  fairy: fairyImg,
  fighting: fightingImg,
  fire: fireImg,
  flying: flyingImg,
  ghost: ghostImg,
  grass: grassImg,
  ground: groundImg,
  ice: iceImg,
  normal: normalImg,
  poison: poisonImg,
  psychic: psychicImg,
  rock: rockImg,
  steel: steelImg,
  water: waterImg,
}


const Card = ({pokemon, handlePokemonsByType}) => {
  
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
    pokemonImage.style.transform = ` translateZ(280px) rotateZ(-4deg)`;
    main.style.transform = ` translateZ(68px)`;
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
                <div className="inner-experience">
                  <div>{pokemonData.base_experience}</div>
                </div>
            </div>
            
            <div className="types">
              {pokemonData.types.map( type => {
                  return (
                    <button key={type.name} onClick={() => handlePokemonsByType(type.url)}>
                      <img 
                        className="pokemon-image" 
                        src={typesImages[type.name]} 
                        alt={type.name}
                      />
                    </button> 
                  )
              })}
            </div> 
          </main>
        </div>
      </ContainerCard>
  );
}

export default Card;