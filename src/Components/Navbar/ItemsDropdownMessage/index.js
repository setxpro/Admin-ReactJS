import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

import * as C from './styles';

function ItemsDropdownMessage({ name, avatar, date, message, openMessage }) {

    const { theme } = useContext(ThemeContext);

  return (
      <C.ContentItems openMessage={openMessage}>
          <C.AreaAvatar>
              <img src={avatar} alt='avatar'/>
          </C.AreaAvatar>
            <C.AreaMessage theme={theme} openMessage={openMessage}>
                <h2>{name}</h2>
                <p>{message}</p>
                <span>{date}</span>
            </C.AreaMessage>
      </C.ContentItems>
  );
}

export default ItemsDropdownMessage;