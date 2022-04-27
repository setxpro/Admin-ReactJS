import React from 'react';
import { ArrowDownLeft, ArrowUpRight } from '../../../Styles/icons/styles';

import * as C from './styles';

function ItemsPercentage({value, title, percentual}) {
  return (
      <C.Container>
         <C.Content>
            <C.AreaValuePercent mode={percentual}> <span>R$ {value}</span> <span>{percentual}%</span></C.AreaValuePercent>
            <h3>{title}</h3>
         </C.Content>
            {percentual <= 0 ? <ArrowDownLeft/> : <ArrowUpRight/>}
      </C.Container>
  );
}

export default ItemsPercentage;