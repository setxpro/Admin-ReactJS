import styled from 'styled-components';

export const Container = styled.div`
  height: 440px;
  background-color: #191C24;
  width: 35%;
  border-radius: 1rem;
  padding: 1rem;
`;

export const AreaTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 2rem;
    a {
        color: rgb(108, 114, 147);
    }
`;
export const SlideShow = styled.div`
  height: 197px;
  width: 282px;
  margin: auto;
  display: flex;
  position: relative;
  overflow: hidden;

    article {
      width: 282px;
      align-items: center;
      position: absolute;
      transition: all 0.3s linear;
      img {
        height: 197px;
        width: 282px;
      }
    }
`;


export const InfoAuthorArea = styled.div`
    margin-top: 3rem;
    
`;

export const ContainerAuthor = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;
export const ContentImageTitle = styled.div`
  
  display: flex;
  gap: 1rem;
`;

export const ContainerAvatar = styled.div`
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

export const ContainerAreaTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  h5 {
    color: rgb(108, 114, 147);
    font-size: 1rem;
    font-weight: 100;
  }
`;

export const ContainerTitle = styled.div`
  
  width: 260px;
  display: flex;
  justify-content: space-between;

  p {
    font-size: 12px;
    color: rgb(108, 114, 147);
  }
`;

export const ContentAreaObsAndProgress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Progress = styled.div`
  width: 281px;
  height: 10px;
  background: rgba(0, 0, 0, .3);
  position: relative;

  span {
    width: ${props => props.mode && `${props.mode}%`};
    height: 10px;
    position: absolute;
    background-color: #444ddd;
  }
`;