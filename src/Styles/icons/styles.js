import styled from 'styled-components';

import { AiOutlineCalendar } from 'react-icons/ai';
import { BsCodeSlash } from 'react-icons/bs';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineAttachFile } from 'react-icons/md';
import { MdLogout } from 'react-icons/md';

import { BsArrowDownLeft } from 'react-icons/bs';
import { BsArrowUpRight } from 'react-icons/bs';

import { BsClockHistory } from 'react-icons/bs';
import { IoMailOpenOutline } from 'react-icons/io5';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { FiUploadCloud } from 'react-icons/fi';
import { AiOutlineAntDesign } from 'react-icons/ai';


import { GiChart } from 'react-icons/gi';
import { RiSuitcaseLine } from 'react-icons/ri';
import { CgScreen } from 'react-icons/cg';


export const ChartIconGi = styled(GiChart)`
   font-size: 7rem;
   color: blue;
`;
export const SuitchaseIcon = styled(RiSuitcaseLine)`
    font-size: 7rem;
    color: rgb(207, 61, 72);

`;
export const Screen = styled(CgScreen)`
    font-size: 7rem;
    color: rgb(62, 170, 120);
`;


export const DocumentIcon = styled(IoDocumentTextOutline)`
    width: 45px;
    height: 45px;
    padding: .6rem;
    background: #44dd;
`;
export const UploadIcon = styled(FiUploadCloud)`
    width: 45px;
    height: 45px;
    padding: .6rem;
    background: rgb(62, 170, 120);
`;
export const ClockIcon = styled(BsClockHistory)`
    width: 45px;
    height: 45px;
    padding: .6rem;
    background: #0FF;
`;
export const OpenMailIcon = styled(IoMailOpenOutline)`
    width: 45px;
    height: 45px;
    padding: .6rem;
    background: rgb(207, 61, 72);
`;
export const Designin = styled(AiOutlineAntDesign)`
    width: 45px;
    height: 45px;
    padding: .6rem;
    background: #FF0;
`;

export const ArrowUpRight = styled(BsArrowUpRight)`
    background: rgba(0, 255, 0,0.2);
    width: 40px;
    height: 40px;
    padding: .5rem;
    border-radius: 1rem;
    color: #0F0;
`;
export const ArrowDownLeft = styled(BsArrowDownLeft)`
    background: rgba(255, 0, 0,0.2);
    width: 40px;
    height: 40px;
    padding: .5rem;
    border-radius: 1rem;
    color: red;
`;

export const Calendar = styled(AiOutlineCalendar)`
    color: #018233;
    font-size: 1.5rem;
    padding: 5px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: ${props => props.theme ? '#212529' : '#FFF'};
`;
export const Logout = styled(MdLogout)`
    color: #FFFF;
    font-size: 1.5rem;
    padding: 5px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: #212529;
`;
export const Company = styled(BsCodeSlash)`
    color: #44dd;
    font-size: 1.5rem;
    padding: 5px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: ${props => props.theme ? '#212529' : '#FFF'};
`;
export const Settings = styled(IoSettingsOutline)`
    color: #cf3d48;
    font-size: 1.5rem;
    padding: 5px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: ${props => props.theme ? '#212529' : '#FFF'};
`;
export const Attach = styled(MdOutlineAttachFile)`
    color: #ff0;
    font-size: 1.5rem;
    padding: 5px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: ${props => props.theme ? '#212529' : '#FFF'};
`;
