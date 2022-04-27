import React from 'react';
import { Settings } from '../styles';

import * as C from './styles';

function DropdownSettings({title, link, open, mode}) {
  return (
    <C.Container to={link} open={open}>
      <li>
        {mode !== true ? <C.Circle>{title}</C.Circle> : <Settings/>}
          
      </li>
  </C.Container>
  );
}

export default DropdownSettings;