import React, { useEffect, useState } from 'react';
import { TransactionHistoryDb } from '../../../../db/HomeInfo';

import * as C from './styles';

function GraficSimulation() {

    const value = TransactionHistoryDb.map((i) => i.value);
    const soma = value.reduce(function(soma, i) {
        return soma + i;
    });
  
  return (
    <C.Span><span>{soma}</span></C.Span>
  );
}

export default GraficSimulation;