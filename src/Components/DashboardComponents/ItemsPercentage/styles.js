import styled from 'styled-components';

export const Container = styled.div`
    color: #fff;
    background-color: #191C24;
    width: 30%;
    height: 100%;
    margin: auto;
    border-radius: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    h3 {
        margin-top: 1.5rem;
        color: #294B89;
        font-weight: 200;
    }
`;
export const Content = styled.div`
  
`;
export const AreaValuePercent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    span {
        
        :nth-child(1) {
            font-weight: bold;
            font-size: 22px;
        }
        :nth-child(2) {
            color: ${props => props.mode <= 0 ? '#cf3d48' : '#286a4a'};
            font-weight: bold;
            font-size: 1rem;
        }
    }
`;
