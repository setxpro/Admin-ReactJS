import React from 'react';

import * as C from './styles';

import * as Icon from '../styles';

function DropdownTable({title, link, open, mode}) {
  return (
      <C.Container to={link} open={open}>
          <li>
            { mode !== true ? <C.Circle open={open}> {title}</C.Circle> : <Icon.TableIcon/> }
          </li>
      </C.Container>
  );
}

export default DropdownTable;