import React from 'react';
import IsChecked from '../isChecked';

import * as C from './styles';

function TableOrderItems({checked, name, avatar, orderNo, productCost, project, paymentMode, startDate, paymentStatus }) {
  return (
      <C.Tr mode={paymentStatus}>
        <td>{checked}</td>
        <td>
          <div><img src={avatar} alt="avatar"/> {name}</div>
        </td>
        <td>{orderNo}</td>
        <td>$ {productCost}</td>
        <td>{project}</td>
        <td>{paymentMode}</td>
        <td>{startDate}</td>
        <td><span>{paymentStatus}</span></td>
      </C.Tr>
  );
}

export default TableOrderItems;