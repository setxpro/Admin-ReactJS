import React from 'react';

import * as C from './styles';

function MessageItems({avatar, name, message, time }) {

  return(
    <C.ContentArea>
        <C.AvatarMessage>
            <img src={avatar} alt=""/>
        </C.AvatarMessage>
        <C.ContentMessage>
            <div>
                <h3>{name}</h3><span>{time}</span>
            </div>
            <h5>{message}</h5>
        </C.ContentMessage>
    </C.ContentArea>
  );
}

export default MessageItems;