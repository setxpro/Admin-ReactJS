import React from 'react';
import * as Icon from '../styles';

import * as C from './styles';

function DropdownEcommerce({title, link, open, mode}) {
  return (
    <C.Container to={link} open={open}>
      <li>
        {mode !== true ? <C.Circle>{title}</C.Circle> : <Icon.Suitcase/> }
      </li>
    </C.Container>
  );
}

export default DropdownEcommerce;