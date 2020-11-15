import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import api from '../../services/api';
import logo from '../../images/logo.png';

import { Container } from './styles';


const Topbar = () => {

  const [ searchText, setSearchText ] = useState(''); 

  const handleClick = () => {

  }

  return (
      <Container>
         <img src={logo} alt="pokemon"/>
         
         <div>
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

export default Topbar;