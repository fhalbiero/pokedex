import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 120px;
    max-width: 1080px;

    img {
        width: 240px;
    }

    div {

        width: 300px;
        background-color: #fff;
        border-radius: 16px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        input {
            border: none;
            padding: 10px 16px;
            font-size: 18px;
            background-color: transparent;
        }

        button {
            background-color: transparent;
            border: none;
            opacity: 0.7;
            transition: all 0.5s ease;
            margin-right: 16px;

            &:hover {
                opacity: 1; 
            }

            svg {
                font-size: 24px;
            }
        }

    }

`; 