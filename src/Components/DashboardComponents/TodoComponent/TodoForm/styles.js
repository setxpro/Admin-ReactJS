import styled from 'styled-components';

export const Container = styled.form`
    margin: auto;
    padding: 5px;
    width: 90%;
    margin-bottom: 1rem ;
    background: linear-gradient(
                90deg,
                rgba(20, 159, 255, 1) 0%,
                rgba(17, 122, 255, 1) 100%
            );
    input {
        padding: 10px;
        background: #191c24;
        border: none;
        outline: none;
        color: #fff;
        font-size: 1rem;
    }

    button {
        font-size: 1.5rem;
        border: none;
        background: transparent;
        margin-left: 15px;
        cursor: pointer;
    }
`;
