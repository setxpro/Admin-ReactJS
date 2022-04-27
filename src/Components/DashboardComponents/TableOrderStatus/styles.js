import styled from 'styled-components';

export const Container = styled.div`
    padding: 1rem;
    width: 100%;
    height: 100%;
    background-color: #191c24;
    border-radius: 1rem;

    table {
        width: inherit;
        tr {
            text-align: center;
            
            th {
                padding: 10px;
                color: rgb(108, 114, 147);
                border-bottom: 1px solid rgba(255, 255, 255, 0.2);

                .customize{
                    all:unset;
                    position:relative;
                    display: inline-block;
                    border: dashed 1px #CCC;
                    width:20px;
                    height: 20px;
                    background: #EEE;
                    cursor:pointer;
                }
                .customize:checked{
                    border: dashed 1px transparent;
                }
                .customize:checked::after{
                    content:"";
                    position:absolute;
                    width:12px;
                    height:12px;
                    left: calc(50% - 6px);
                    top: calc(50% - 6px);
                    border-radius:50%;
                }
                .customize.red:checked{
                    background: #D44241;
                }
                .customize.red:checked::after{
                    background: #822928;
                }
            }

             td {
                padding: 1rem;
                border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                color: rgb(108, 114, 147);

               > div {
                   display: flex;
                   align-items: center;
                   gap: 1rem;

                    img {
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                    }
               }

                span {
                    position: absolute;
                    width: 100px;
                    height: 35px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-weight: bold;

                    margin-top: -20px;
                    margin-left: 15px;
                }
             }

        }
    }
`;
