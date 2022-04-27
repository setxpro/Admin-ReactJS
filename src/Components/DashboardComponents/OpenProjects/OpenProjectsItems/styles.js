import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 75px;
    border-bottom: 1px solid rgba(255, 255, 255, .2);
`;

export const ContentLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;
export const Icon = styled.div`

`;
export const AreaTitle = styled.div`
    h3 {
        color: #fff;
    }
    h4 {
        color: #294b89;
        font-weight: 300;
    }
`;

export const ContentRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    color: #294b89;
`;

export const AreaTime = styled.div`

`;
export const AreaRight = styled.div`
    span {
        display: flex;
    }
`;
