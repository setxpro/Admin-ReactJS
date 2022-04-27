import React, { useState } from 'react';

import * as C from './styles';

import TransactionItems from './TransactionItems';
import GraficSimulation from './GraficSimulation';
import { TransactionHistoryDb } from '../../../db/HomeInfo';

function TransactionHistory() {


  return (
      <C.Container>
          <h2>Transaction History</h2>
          <C.ContentArea>
              <GraficSimulation/>
            {TransactionHistoryDb.map((item, index) => (
                <TransactionItems
                  key={index}
                  title={item.title}
                  value={item.value}
                  date={item.date}
                  
                />
            ))}
            
          </C.ContentArea>
      </C.Container>
  );
}

export default TransactionHistory;