import React from 'react';
import { Link } from 'react-router-dom';
import { MessageItemDB } from '../../../db/HomeInfo';
import MessageItems from './MessageItems';

import * as C from './styles';

function MessageComponent() {
  return (
      <C.Container>
          <C.AreaTitle><h3>Message</h3><Link to='/message'>View all</Link></C.AreaTitle>
          <C.ContentMessage>
              {MessageItemDB.map((message, index) => (
                  <MessageItems
                    key={index}
                    avatar={message.avatar}
                    name={message.name}
                    message={message.message}
                    time={message.time}
                  />
              ))}
          </C.ContentMessage>
      </C.Container>
  );
}

export default MessageComponent;