import styled from 'styled-components';


export const Container = styled.div`

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    padding: 26px 56px;
    width: 100%;
    max-width: 1080;

    img {
        position: absolute;
        top: 26px;
        left: 26px;
        width: 140px;
    }

    .search {

        width: 700px;
        background-color: #fff;
        border-radius: 5px;
        padding: 16px 24px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        input {
            border: none;
            font-size: 22px;
            width: 500px;
            background-color: transparent;
        }

        button {
            background-color: transparent;
            border: none;
            opacity: 0.7;
            transition: all 0.5s ease;
            margin-right: 16px;
            cursor: pointer;

            &:hover {
                opacity: 1; 
            }

            svg {
                font-size: 24px;
            }
        }

    }

    

`; 