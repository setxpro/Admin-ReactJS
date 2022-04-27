import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';

import DropdownEcommerce from './DropdownEcommerce';
import { DropdownEcommerceItems } from './DropdownEcommerce/DropdownEcommerceItems';

import { DropdownSettingsItems } from './DropdownSettings/DropdownSettingsItems';
import DropdownSettings from './DropdownSettings';

import DropdownTable from './DropdownTable';
import { DropdownTableItems } from './DropdownTable/DropdownTableItems';

import DropdownUser from './DropdownUser';
import { DropdownUserItems } from './DropdownUser/DropdownUserItems';

import * as C from './styles';
import UserInfo from './UserInfo';
import { UserInfoDB } from '../../db/User';

function Sidebar({openSidebar}) {

  const { theme } = useContext(ThemeContext);

  const [tableDropdown, setTableDropdown] = useState(false);
  const openTable = () => setTableDropdown(!tableDropdown);

  const [ecomerceDropdown, setEcommerceDropdown] = useState(false);
  const openEcommerce = () => setEcommerceDropdown(!ecomerceDropdown);

  const [userDropdown, setUserDropdown] = useState(false);
  const openUser = () => setUserDropdown(!userDropdown);

  const [settingsDropdown, setSettingsDropdown] = useState(false);
  const openSettings = () => setSettingsDropdown(!settingsDropdown);


  return (
    <C.Container mode={openSidebar} theme={theme}>
     <C.HeaderSidebar mode={openSidebar}>
       <h2>T</h2><h2 className='closeMenu'>ECHPTK</h2>
     </C.HeaderSidebar>
     <C.AreaMenuSidebar theme={theme} mode={openSidebar}>
        <ul>
        <Link to="">
          <li>
            <div>Dashboard</div><span><C.ChartIcon/></span>
          </li>
          </Link>
        <Link to="">
          <li>
            <div>Widgets</div><span><C.WidgetsIcon/></span>
          </li>
          </Link>
        <Link to="">
          <li>
            <div>Todo</div><span><C.Todo/></span>
          </li>
          </Link>
        <Link to="" onClick={openTable}>
          <li>
            <div>Table</div><span><C.TableIcon/></span> <C.ArrouDown/>
          </li>
          </Link>
          {tableDropdown === true ? 
          <>
            {DropdownTableItems.map((item, index) => (
            <DropdownTable
              key={index}
              title={item.title}
              link={item.link}
              open={tableDropdown}
              mode={openSidebar}
            />
          ))}
          </>
          :
          null  
        }
        <Link to="/calendar">
          <li>
            <div>Calendário </div><span>C</span>
          </li>
          </Link>
        <Link to="" onClick={openEcommerce}>
          <li> 
            <div>E-Commerce</div> <span><C.Suitcase/></span> <C.ArrouDown/>
          </li>
          </Link>

          {ecomerceDropdown === true ? 
          <>
          {DropdownEcommerceItems.map((item, index) => (
            <DropdownEcommerce
              key={index}
              title={item.title}
              link={item.link}
              open={ecomerceDropdown}
              mode={openSidebar}
            />
          ))}
          </> 
          :
          null 
        }
        <Link to="" onClick={openUser}>
          <li>
            <div>Usuário</div> <span><C.Users/></span> <C.ArrouDown/>
          </li>
          </Link>
          {userDropdown === true ? 
          <>
            {DropdownUserItems.map((item, index) => (
              <DropdownUser
                key={index}
                title={item.title}
                link={item.link}
                open={userDropdown}
                mode={openSidebar}
              />
          ))}
          </>
          :
          null  
        }
        <Link to="" onClick={openSettings}>
          <li>
           <div>Settings</div> <span><C.Settings/></span><C.ArrouDown/>
          </li>
          </Link>
          {settingsDropdown === true ? 
          <>
            {DropdownSettingsItems.map((item, index) => (
            <DropdownSettings
              key={index}
              title={item.title}
              link={item.link}
              open={settingsDropdown}
              mode={openSidebar}
            />
          ))}
          </>  
          :
          null
        }
        </ul>
     </C.AreaMenuSidebar>
     <C.AreaUserLogged>
       {UserInfoDB.map((user, index) => (
         <UserInfo 
          key={index}
          name={user.name}
          avatar={user.avatar}
          ocupation={user.ocupation}
          mode={openSidebar}
         />
       ))}
     </C.AreaUserLogged>
    </C.Container>
  );
}

export default Sidebar;