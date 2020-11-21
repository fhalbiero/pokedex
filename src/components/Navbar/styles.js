import styled from 'styled-components';


export const Container = styled.div`

    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: rgba(0, 0, 0, 0.90);
    margin-top: -80px;

    padding: 26px 56px;
    width: 100%;
    max-width: 1080;
    z-index: 999;

    h1 {
        color: #F2D94E;
        font-weight: 500;
    }

    .search {

        width: 90%;
        max-width: 400px;
        background-color: #fff;
        border-radius: 16px;
        padding: 4px 16px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        input {
            border: none;
            font-size: 18px;
            width: 300px;
            text-transform: uppercase;
            background-color: transparent;
        }

        button {
            background-color: transparent;
            border: none;
            opacity: 0.7;
            transition: all 0.5s ease;
            cursor: pointer;

            &:hover {
                opacity: 1; 
            }

            svg {
                font-size: 24px;
                color: #256ab0;
            }
        }

    }

    

`; 