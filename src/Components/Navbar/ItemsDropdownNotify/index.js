import React from 'react';

import * as C from './styles';

function ItemsDropdownNotify({icon, title, message, openMessage}) {
  return (
      <C.Container openMessage={openMessage}>
        <C.AreaIcon>
          {icon}
        </C.AreaIcon>
        <C.AreaMessage  openMessage={openMessage}>
          <h4>{title}</h4>
          <p>{message}</p>
        </C.AreaMessage>
      </C.Container>
  );
}

export default ItemsDropdownNotify;