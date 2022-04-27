import React from 'react';

import * as C from './styles';

function RevenueSalesPurchase({ title, value, icon, resum, percent }) {
  return (
      <C.Container>
          <h3>{title}</h3>
         <C.AreaGeneral>
                <C.ContentAreaSalesTotail>
                    <C.AreaSales mode={percent}>
                        <span>R$ {value}</span>
                        <span>{percent}%</span>
                    </C.AreaSales>
                    <p>{resum}</p>  
                </C.ContentAreaSalesTotail>
                <C.IconArea>
                    {icon}
                </C.IconArea>
         </C.AreaGeneral>
      </C.Container>
  );
}

export default RevenueSalesPurchase;