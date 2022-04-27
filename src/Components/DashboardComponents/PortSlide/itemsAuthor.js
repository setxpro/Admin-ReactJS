import React from 'react';

import * as C from './styles';

function ItemsAuthor({name, message, avatar, obs, progress, time }) {
  return (
      <C.ContainerAuthor>
          <C.ContentImageTitle>
            <C.ContainerAvatar>
                <img src={avatar} alt=''/>
            </C.ContainerAvatar>
            <C.ContainerAreaTitle>
                <C.ContainerTitle>
                        <h3>{name}</h3>
                        <p>{time}</p>
                </C.ContainerTitle>
                <h5>{message}</h5>
            </C.ContainerAreaTitle>
          </C.ContentImageTitle>
          <C.ContentAreaObsAndProgress>
                <h4>{obs} {progress}%</h4>
                <C.Progress mode={progress}>
                    <span></span>
                </C.Progress>
          </C.ContentAreaObsAndProgress>
      </C.ContainerAuthor>
  );
}

export default ItemsAuthor;