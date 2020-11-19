import styled, { css } from 'styled-components';


export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    perspective: 1080px;

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
        background-color: rgba(255, 255, 255, 0.95);

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
                color: #5e60ce;
                font-size: 24px;
                font-weight: 700;
                margin: 16px 0;
                text-transform: uppercase;
            }

            h4 {
                font-size: 16px;
                font-weight: 700;
                margin-right: 8px;
            }

            .experience {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                width: 100%;

                .inner-experience {
                    background-color: #d0d0d0;
                    padding: 1px;
                    width: 100px;
                    border-radius: 16px;
                    margin: 6px 0;

                    div {
                        font-size: 12px;
                        text-align: right;
                        padding-right: 4px;
                        background-color: #80ffdb;
                        ${({experience}) => css` width: ${experience / 3}px `};

                        box-shadow: 0 0 4px #80ffdb;
                    }
                }                
            }

            .types {
                margin: 10px 0;
                width: 100%;

                display: flex;
                align-items: center;
                justify-content: flex-start;
            }

            .abilities {
                width: 100%;

                display: flex;
                align-items: center;
                justify-content: flex-start;
            }

            button {
                background-color: #4ea8de;
                color: #fff;
                font-weight: 700;
                border: none;
                border-radius: 5px;
                padding: 5px 8px;
                margin: 2px;
                opacity: 1;
                transition: all 0.5s ease;

                &:hover {
                    opacity: 0.8; 
                }
            }
        }
        
    }
    

`; 