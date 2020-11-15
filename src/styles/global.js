import { createGlobalStyle } from 'styled-components';

import background from '../images/background.jpg';

export default createGlobalStyle`
   
   * {
       padding: 0;
       margin: 0;
       box-sizing: border-box; 
   }

   body {
        font-family: Signika, sans-serif;
        color: #262626;
        width: 100%;
        height: 100%;

        background-color: rgba(0, 0, 0, .05);
        background-image: url(${background});
        background-position: center;
        background-size:cover;
        background-repeat: no-repeat;
    
        background-attachment: fixed; 

        width: 100%;
   }

`; 