import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
    text-decoration: none;

    transition: all 1s ease;
    height: ${props => props.open ? '50px' : '0px'};
    opacity: ${props => props.open ? '1' : '0'};

    li {
        display: none;
        justify-content: space-between;
    }
`;
export const Circle = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
    span {
        width: 15px;
        height: 15px;
        border: 3px dashed #FFF;
        border-radius: 50%;
    }
    font-size: 14px;
`;