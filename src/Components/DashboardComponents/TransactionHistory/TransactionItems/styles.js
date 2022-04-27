import styled from 'styled-components';

export const ContentTransfer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    h3 {
        margin-bottom: .5rem;
    }

    span {
        color: #294b89;
    }

    >div {
        :nth-child(2) {
            font-size: 1.3rem;
            font-weight: bold;
        }
    }

    margin-bottom: 1rem;
`;
