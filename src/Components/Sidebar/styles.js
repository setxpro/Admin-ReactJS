import styled from 'styled-components';

import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';

import { MdShowChart } from 'react-icons/md';
import { MdOutlineWidgets } from 'react-icons/md';
import { RiTodoLine } from 'react-icons/ri';
import { MdOutlineBackupTable } from 'react-icons/md';
import { IoSettingsOutline } from 'react-icons/io5';
import { FiUsers } from 'react-icons/fi';

import { RiSuitcaseLine } from 'react-icons/ri';

export const ChartIcon = styled(MdShowChart)`
    font-size: 1.5rem;
`;
export const WidgetsIcon = styled(MdOutlineWidgets)`
    font-size: 1.5rem;
`;
export const Todo = styled(RiTodoLine)`
    font-size: 1.5rem;
`;
export const TableIcon = styled(MdOutlineBackupTable)`
    font-size: 1.5rem;
`;
export const Users = styled(FiUsers)`
    font-size: 1.5rem;
`;
export const Suitcase = styled(RiSuitcaseLine)`
    font-size: 1.5rem;
`;

export const Settings = styled(IoSettingsOutline)`
    font-size: 1.5rem;
`;

export const ArrouDown = styled(IoIosArrowDown)``;
export const ArrouUp = styled(IoIosArrowUp)``;

export const Container = styled.div`
    background-color: ${props => props.theme === true ? '#54eaba' : '#cf3d48'} ;
    transition: all .5s ease;
    width: ${props => props.mode ? '5%' : '15%'};
    height: 100vh;
    position: fixed;
`;

export const HeaderSidebar = styled.div`

    height: 60px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
        font-size: 2.5em;
    }

    .closeMenu {
        display: ${props => props.mode ? 'none' : 'block'};
        animation: both 1s logo ease;

        @keyframes logo {
            0% {
                transform: rotateX(190deg);
            }
        }
    }
`;

export const AreaMenuSidebar = styled.nav`
    width: 100%;
    height: calc(100vh - 110px);

    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 3px;
    }
    ::-webkit-scrollbar-thumb {
        background: rgba(0,0,0,0.3);
    }

    padding: 10px 0;

    ul {
        width: inherit;
        display: flex;
        flex-direction: column;

        a {
            width: inherit;
            color: ${props => props.theme === true ? '#333' : '#FFF'};
            font-size: 1.2rem;

            li {
                list-style: none;
                padding: 1rem;
                border-radius: 0px 1.5rem 1.5rem 0px;
                display: flex;
                justify-content: space-between;
                
                &:hover {
                    background: rgba(255, 255, 255, 0.2);
                }

                > div {
                    display: ${props => props.mode === true  ? 'none' : 'block'};
                }

                span {
                    display: ${props => props.mode === true  ? 'block' : 'none'};
                }
            
            }
        }

        
    }
`;
export const AreaUserLogged = styled.div`
    height: 70px;
    padding: 5px 10px;
`;