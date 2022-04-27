import styled from 'styled-components';

import { MdDarkMode } from 'react-icons/md';
import { MdLightMode } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';
import { BiMessageAlt } from 'react-icons/bi';
import { AiOutlineBell } from 'react-icons/ai';
import { RiBarChartHorizontalFill } from 'react-icons/ri';

export const Bar = styled(RiBarChartHorizontalFill)`
    font-size: 1.8rem;
    cursor: pointer;
`;
export const Message = styled(BiMessageAlt)`
    font-size: 1.8rem;
    cursor: pointer;
`;
export const Bell = styled(AiOutlineBell)`
    font-size: 1.8rem;
    cursor: pointer;
`;

export const Container = styled.div`
    transition: all .5s ease;
    width: ${props => props.mode ? 'calc(85% + 10%)' : '85%'};
    background: #000;
    height: 60px;
    color: #FFF;
    position: fixed;
    right: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    z-index: 99;
`;

export const ContentLeft = styled.div`
   
`;
export const AreaDropDown = styled.div`
   
`;
export const AreaMessage = styled.div`
    position: relative;
    .message {
        position: absolute;
        top: 0;
        left: 10px;
        top: -03px;
        font-size: 10px;

        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #F00;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
export const AreaNotify = styled.div`
    position: relative;
    .notify {
        position: absolute;
        top: -03px;
        left: 10px;
        font-size: 10px;

        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #444DDD;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
export const ContentRight = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`;

export const AreaTheme = styled.div`
   
`;
export const ToggleDarkMode = styled(MdDarkMode)`
    font-size: 1.8rem;
    cursor: pointer;

    animation: 3s rot ease;
    
    @keyframes rot {
        0% {
            
            transform: rotate(360deg);
        }
    }
`;
export const ToggleLightMode = styled(MdLightMode)`
    font-size: 1.8rem;
    cursor: pointer;

    animation: 3s rot ease;

    @keyframes rot {
        0% {
            transform: rotate(360deg);
        }
    }
`;


export const AreaSearch = styled.div`
     input {
        background: transparent;
        color: #888;
        outline: none;
        border: none;
        border-bottom: 1px solid #2c2e33;
        transition: all 1s ease;
        width: ${props => props.openSearch ? '300px' : '0px'};
    }
`;
export const SearchIcon = styled(FiSearch)`
    font-size: 1.8rem;
    cursor: pointer;
`;

export const AreaAvatar = styled.div`
    img {
        width: 40px;
        height: 40px;
        padding: 2px;
        border-radius: 50%;
        border: 3px solid #FFF;
        cursor: pointer;
    }
`;
