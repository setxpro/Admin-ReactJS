import styled from 'styled-components';

export const Container = styled.div`
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
`;
