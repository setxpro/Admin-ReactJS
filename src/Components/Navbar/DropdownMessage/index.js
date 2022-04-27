import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../context/ThemeContext';
import { MessageDB } from '../../../db/NavBarDb';
import ItemsDropdownMessage from '../ItemsDropdownMessage';

import * as C from './styles';

function DropdownMessage({openMessage}) {

  const { theme } = useContext(ThemeContext);

  return (
    <C.Container mode={openMessage} theme={theme}>
        <h3>Mensagem</h3>
        <C.ContentMessages openMessage={openMessage}>
        {MessageDB.map((message, index) => (
              <Link to={`/message/${message.id}`}>
                <ItemsDropdownMessage openMessage={openMessage}
                key={index}
                name={message.name}
                avatar={message.avatar}
                message={message.message}
                date={message.date}
              />
              </Link>
          ))}
        </C.ContentMessages>
        <h6>See more Messages</h6>
    </C.Container>
  );
}

export default DropdownMessage;