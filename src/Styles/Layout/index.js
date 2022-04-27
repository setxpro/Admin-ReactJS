import styled from 'styled-components';


export const Layout = styled.div`
    width: 100%;
    margin-top: 60px;
    margin-left: 15%;
    transition: all .5s ease;
    margin-left: ${props => props.mode ? '5%' : '15%'};
    height: 100%;
    background: ${props => props.theme === true ? '#FFF' : '#000'};
    color: ${props => props.theme === true ? '#333' : '#FFF'};
    padding: 1rem;
`;
