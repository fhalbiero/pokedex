import styled, { css } from 'styled-components';


export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    perspective: 900px;

    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;   
        transform-style: preserve-3d;     

        margin: 24px;
        padding: 24px;

        width: 280px;
        height: 390px;
        box-shadow: 0 10px 16px rgba(0,0,0, .5), 0 0 24px rgba(0,0,0, .2);
        background-color: #fff;
        border: 1px solid #efefef;
        border-radius: 16px; 
        background-color: rgba(255, 255, 255, 0.85);

        .image-container {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            

            .pokeball-image {
                height: 130px;
                z-index: 1;
                transition: all 0.5s ease;
            }

            .pokemon-image {
                position: absolute;
                height: 190px;
                z-index: 2;
                transition: all 0.5s ease;
            }
        }

        
        main {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: all 0.5s ease;

            h2 {
                font-size: 24px;
                font-weight: 700;
                margin-top: 24px;
                text-transform: uppercase;
                transition: all 0.5s ease;
                margin-bottom: 4px;
            }

            h4 {
                margin-top: 24px;
                text-transform: uppercase;
                transition: all 0.5s ease;
            }

            .experience {
                background-color: #d0d0d0;
                padding: 1px;
                width: 200px;
                transition: all 0.5s ease;
                margin: 6px 0;

                div {
                    font-size: 12px;
                    text-align: right;
                    padding-right: 4px;
                    background-color: #03fb9a;
                    ${({experience}) => css` width: ${experience / 1.5}px `};

                    box-shadow: 0 0 6px #03fb9a;
                }
                
            }

            .types {
                transition: all 0.5s ease;

            }

            .abilities {
                transition: all 0.5s ease;
            }

            button {
                background-color: #a9a9a9;
                border: none;
                border-radius: 4px;
                padding: 6px 12px;
                margin: 4px;
                opacity: 0.7;
                transition: all 0.5s ease;

                &:hover {
                    opacity: 1; 
                }
            }
        }
        
    }
    

`; 