import React, { useContext, useState } from 'react';
import { SidebarAreaContext } from '../../context/SidebarContextArea';
import { ThemeContext } from '../../context/ThemeContext';
import { MessageDB, Notifications } from '../../db/NavBarDb';
import DropdownMenuAvatar from './DropdownMenuAvatar';
import DropdownMessage from './DropdownMessage';
import DropdownNotify from './DropdownNotify';

import * as C from './styles';

function Navbar() {
  const { openSidebar, toggleSidebarFalse } = useContext(SidebarAreaContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [openMessage, setOpenMessage] = useState(false);
  const showMessage = () => {
    setOpenMessage(!openMessage);
    setOpenNotify(false);
    setOpenMenuSettings(false);
  };

  const [openNotify, setOpenNotify] = useState(false);
  const showNotify = () => {
    setOpenNotify(!openNotify)
    setOpenMenuSettings(false);
    setOpenMessage(false);
  };

  const [openMenuSettings, setOpenMenuSettings] = useState(false);
  const showMenu = () => {
    setOpenMenuSettings(!openMenuSettings);
    setOpenMessage(false);
    setOpenNotify(false);
  };

  const [openSearch, setOpenSearch] = useState(false);
  const getInputSearch = () => setOpenSearch(!openSearch);

  return (
    <C.Container mode={openSidebar}>
      <C.ContentLeft>
        <C.Bar onClick={toggleSidebarFalse}/>
      </C.ContentLeft>
      <C.ContentRight>

        <C.AreaSearch openSearch={openSearch}>
          <input type="search" name="search" placeholder='Search....'/>
          <C.SearchIcon onClick={getInputSearch}/>
        </C.AreaSearch>

        <C.AreaTheme>
          {!theme ? <C.ToggleLightMode onClick={toggleTheme}/> : <C.ToggleDarkMode onClick={toggleTheme}/>}            
        </C.AreaTheme>

        <C.AreaDropDown>
          <C.AreaMessage>
              <span className='message'>{MessageDB.length}</span>
              <C.Message onClick={showMessage}/>
          </C.AreaMessage>
                <DropdownMessage openMessage={openMessage}/>
        </C.AreaDropDown>

        <C.AreaDropDown>
            <C.AreaNotify>
                <span className='notify'>{Notifications.length}</span>
                <C.Bell onClick={showNotify}/>
            </C.AreaNotify>
            <DropdownNotify openNotify={openNotify}/>
        </C.AreaDropDown>

        <C.AreaDropDown>
          <C.AreaAvatar>
            <img src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" alt="avatar" onClick={showMenu}/>
          </C.AreaAvatar>
        <DropdownMenuAvatar openMenuSettings={openMenuSettings}/>
        </C.AreaDropDown>
      </C.ContentRight>
    </C.Container>
  );
}

export default Navbar;