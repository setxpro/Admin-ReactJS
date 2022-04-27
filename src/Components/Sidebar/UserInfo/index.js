import React from 'react';

import { Container } from './styles';

function UserInfo({ name, avatar, ocupation, mode }) {
  return (
      <Container mode={mode}>
          {mode !== true ?
            <>
                <img src={avatar} alt=''/>
                <div>
                    <h4>{`Welcame ${name}`}</h4>
                    <p>{ocupation}</p>
                </div>
            </>
            :
            <img src={avatar} alt=''/>
          }
        
      </Container>
  );
}

export default UserInfo;