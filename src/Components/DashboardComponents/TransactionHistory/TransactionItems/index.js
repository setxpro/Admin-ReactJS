import React, { useEffect } from 'react';
import { TransactionHistoryDb } from '../../../../db/HomeInfo';

import * as C from './styles';

function TransactionItems({title, value, date, setValue}) {


  return (
    <C.ContentTransfer>
        <div><h3>{title}</h3> <span>{date}</span></div>
        <div>${value}</div>
  </C.ContentTransfer>
  );
}

export default TransactionItems;