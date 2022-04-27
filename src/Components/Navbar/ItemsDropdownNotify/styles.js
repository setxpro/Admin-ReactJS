import styled from 'styled-components';

export const Container = styled.div`
    transition: all 1s ease;
    opacity: ${props => props.openMessage ? '0' : '1'};
    display: flex;
    align-items: center;
    gap: .5rem;
    padding: .8rem 2px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
   

    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
`;
export const AreaIcon = styled.div`
  
`;
export const AreaMessage = styled.div`
    transition: all .2s ease;
    opacity: ${props => props.openMessage !== true ? '1' : '0'};
    h4 {
        color: #FFF;
    }

  p {
        width: 185px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        color: #DDD;
    }
`;
