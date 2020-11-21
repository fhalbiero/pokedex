import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 24px;
    width: 100%;
    max-width: 1080px;
    margin: auto;
    margin-top: 80px;

    main {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

    footer {
        padding: 26px;

        button {
            background-color: #256ab0;
            color: #fff;
            font-size: 22px;
            font-weight: 700;
            border: none;
            border-radius: 3px;
            padding: 16px 26px;
            opacity: 0.4;
            transition: all 0.5s ease;
            cursor: pointer;

            &:hover {
                opacity: 0.8; 
            }
        }
    }

`; 