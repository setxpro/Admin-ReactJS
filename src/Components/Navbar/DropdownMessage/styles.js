import styled from 'styled-components';

export const Container = styled.div`
    width: 285px;
    transition: all .5s ease;
    height: ${props => props.mode ? '290px' : '0'};
    opacity: ${props => props.mode ? '1' : '0'};
    display: ${props => props.mode ? 'block' : 'none'};
    background-color: ${props => props.theme === true ? '#444ddD' : '#283046'};
    position: absolute;
    margin-top: 14px;
    margin-left: -260px;
    border-radius: 1rem;
    padding: 1rem;

    h3 {
        text-align: center;
        padding-bottom: 1rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    h6 {
        font-size: 12px;
        font-weight: 200;
        text-align: center;
        padding: 5px 0;
        
    }
`;

export const ContentMessages = styled.div`
    /* height: ${props => props.mode ? '290px' : '0'};
    opacity: ${props => props.mode ? '0' : '1'}; */
     margin-top: 1.5rem;
    a {
        text-decoration: none;
    }
`;
