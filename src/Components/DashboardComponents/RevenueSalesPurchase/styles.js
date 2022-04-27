import styled from 'styled-components';

export const Container = styled.div`
    height: 190px;
    width: 40%;
    background: #191C24;
    padding: 1rem;
    border-radius: 1rem;
`;
export const ContentAreaSalesTotail = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    p {
        color: #294b89;
    }
`;
export const AreaSales = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    > span {
        

        :nth-child(1) {
            font-size: 2em;
            font-weight: bold;
        }

        :nth-child(2) {
            font-weight: bold;
            font-size: 1em;
            color: ${props => props.mode <= 0 ? 'red' : 'green'};
            
        }
    }
`;
export const IconArea = styled.div`

`;
export const AreaGeneral = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    height: 100%;
`;
