import React from 'react';
import { OrderStatusDB } from '../../../db/HomeInfo';

import * as C from './styles';
import TableOrderItems from './TableOrderItems';

function TableOrderStatus() {
  return (
      <C.Container>
          <h2>Order Status</h2>
          <table>
              <tr>
                  <th><input type="checkbox" name="check"  className="customize red"/></th>
                  <th>Client Name</th>
                  <th>Order No</th>
                  <th>Product Cost</th>
                  <th>Project</th>
                  <th>Payment Mode</th>
                  <th>Start Date</th>
                  <th>Payment Status</th>
              </tr>
              { OrderStatusDB.map((item, index) => (
                <TableOrderItems
                    key={index}
                    checked={item.checked}
                    name={item.name}
                    avatar={item.avatar}
                    orderNo={item.orderNo}
                    productCost={item.productCost}
                    project={item.project}
                    paymentMode={item.paymentMode}
                    startDate={item.startDate}
                    paymentStatus={item.paymentStatus}
                />
              ))}
          </table>
      </C.Container>
  );
}

export default TableOrderStatus;