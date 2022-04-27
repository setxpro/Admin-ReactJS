import styled from 'styled-components';

export const Container = styled.div`
    height: 440px;
    background-color: #191C24;
    width: 35%;
    border-radius: 1rem;
    padding: 1rem;
`;
export const AreaTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        color: rgb(108, 114, 147);
    }
`;
export const ContentMessage = styled.div`
    height: 380px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 3px;
    }
    ::-webkit-scrollbar-thumb {
        background: rgba(0,0,0,0.3);
    }
    margin-top: 1rem;
`;


