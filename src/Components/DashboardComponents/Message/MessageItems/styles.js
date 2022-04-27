import styled from 'styled-components';

export const ContentArea = styled.div`
   display: flex;
   align-items: center;
   gap: 1rem;
   border-bottom: 1px solid rgba(255, 255, 255, .2);
   padding-bottom: 5px;
   padding-top: 5px;
`;
export const AvatarMessage = styled.div`
    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
`;
export const ContentMessage = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 6rem;

        span {
            color: #6c7293;
            font-size: 12px;
        }
    }

    h5 {
        width: 270px;
        color: #6c7293;
        font-size: 1rem;
        font-weight: 100;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
`;