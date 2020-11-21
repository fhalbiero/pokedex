import styled, { css } from 'styled-components';


export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    perspective: 1580px;

    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;   
        transform-style: preserve-3d;     

        margin: 24px;
        padding: 26px;

        width: 280px;
        height: 360px;
        box-shadow: 0 8px 16px rgba(0,0,0, .4), 0 0 26px rgba(0,0,0, .15);
        background-color: #fff;
        border: 1px solid rgba(60, 68, 76, 0.95);
        border-radius: 5px; 

        background-color: rgba(40, 48, 56, 0.90);

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

            width: 100%;
            transition: all 0.5s ease;

            h2 {
                color: #F2D94E;
                font-size: 24px;
                font-weight: 500;
                margin: 16px 0;
                text-transform: uppercase;
            }

            .experience {
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                width: 100%;
                padding: 4px 8px;

                .inner-experience {
                    background-color: #6f6f6f;
                    width: 200px;
                    border-radius: 8px;
                    margin: 6px 0;

                    div {
                        font-size: 12px;
                        text-align: right;
                        padding-right: 4px;
                        background-color: #36c3f9;
                        border-radius: 8px;
                        color: #30303f;
                        ${({experience}) => css` width: ${experience / 2}px `};
                    }
                }                
            }

            .types {
                width: 100%;

                display: flex;
                justify-content: center;
                align-items: center;
                padding: 8px;
                color: #fff;
            }


            button {
                background-color: transparent;
                border: none;
                padding: 5px 8px;
                margin: 2px;
                opacity: 0.8;
                transition: all 0.5s ease;
                cursor: pointer;

                &:hover {
                    opacity: 1; 
                }

                img {
                    width: 32px;
                }
            }
        }
        
    }
    

`; 