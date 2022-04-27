import styled from 'styled-components';

export const ContentItems = styled.div`
    transition: all .5s ease;
    opacity: ${props => props.openMessage ? '1' : '0'};
    height: ${props => props.openMessage ? '65px' : '0'};
    display: flex;
    align-items: center;
    gap: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
   
`;
export const AreaAvatar = styled.div`
    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
`;
export const AreaMessage = styled.div`
    h2 {
        font-size: 18px;
        font-weight: 500;
        color: ${props => props.openMessage ? '#FFF' : 'transparent'};
        margin-bottom: 5px;
        margin-top: 10px;
    }
    p {
        width: 190px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        color: ${props => props.openMessage ? '#DDD' : 'transparent'};
    }
    span {
        position: absolute;
        top: 0;
        left: 130px;
        color: ${props => props.theme === true ? '#EFEFEF' : '#777'};
        font-size: 13px;
    }
    position: relative;
`;
