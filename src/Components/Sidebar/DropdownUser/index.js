import React from 'react';
import { Users } from '../styles';

import * as C from './styles';

function DropdownUser({title, link, open, mode}) {
  return (
    <C.Container to={link} open={open}>
    <li>
        {mode !== true ? <C.Circle> <span></span> {title}</C.Circle> : <Users/>}
    </li>
</C.Container>
  );
}

export default DropdownUser;