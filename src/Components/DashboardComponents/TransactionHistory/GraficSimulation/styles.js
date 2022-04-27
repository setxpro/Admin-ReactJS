import styled from 'styled-components';

export const Span = styled.div`
   width: 150px;
   height: 150px;
   border-radius: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
   border: 19px dashed #FFF;

   animation: rt 1s cubic-bezier(0, 0.2, 0.8, 1);

    span {
       position: absolute;
       padding: 1rem;
    }

   @keyframes rt {
       0% {
        transform: rotate(360deg);
       }
   }
`;