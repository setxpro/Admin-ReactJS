import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import { Logout, Settings } from '../../../Styles/icons/styles';

import * as C from './styles';

function DropdownMenuAvatar({openMenuSettings}) {

  const { theme } = useContext(ThemeContext);

  return (
      <C.Container mode={openMenuSettings} theme={theme}>
          <h3>Profile</h3>
          <C.ContentActions mode={openMenuSettings}>
              <button><Settings/> Settings</button>
              <button><Logout/> Logout</button>
              <button>Advanced Settings</button>
          </C.ContentActions>
      </C.Container>
  );
}

export default DropdownMenuAvatar;