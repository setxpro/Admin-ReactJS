import React from 'react';

import * as C from './styles';

function IsChecked() {
  return (
    <C.Container>
        <input type="checkbox" name="check" className="customize red"/>
    </C.Container>
  );
}

export default IsChecked;