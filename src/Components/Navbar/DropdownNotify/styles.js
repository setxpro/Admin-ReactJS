import styled from 'styled-components';

export const Container = styled.div`
    width: 258px;
    transition: all .3s ease;
    height: ${props => props.mode === true ? '320px' : '0'};
    opacity: ${props => props.mode ? '1' : '0'};
    display: ${props => props.mode ? 'block' : 'none'};
    background-color: ${props => props.theme === true ? '#444ddD' : '#283046'};
    position: absolute;
    margin-top: 14px;
    margin-left: -230px;
    border-radius: 1rem;
    padding: 1rem;

    h3 {
        text-align: center;
        padding-bottom: 15px;
        border-bottom: 1px solid rgba(255,255,255,.2);
    }
`;
