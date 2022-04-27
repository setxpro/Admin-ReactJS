import styled from 'styled-components';

export const Container = styled.div`
    width: 160px;
    transition: all .3s ease;
    height: ${props => props.mode ? '225px' : '0'};
    opacity: ${props => props.mode ? '1' : '0'};
    display: ${props => props.mode ? 'block' : 'none'};
    background-color: ${props => props.theme === true ? '#444ddD' : '#283046'};
    position: absolute;
    margin-top: 8px;
    margin-left: -110px;
    border-radius: 1rem;
    padding: 1rem;

    h3 {
        text-align: center;
        padding-bottom: 14px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    
`;

export const ContentActions = styled.div`
    transition: all .3s ease;
    opacity: ${props => props.mode === true ? '1' : '0'};
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    button {
        width: 100%;
        border: none;
        color: #fff;
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem 5px;
        cursor: pointer;
        background: transparent;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);

        &:hover {
            background: rgba(255, 255, 255, 0.2);
        }
    }
`;