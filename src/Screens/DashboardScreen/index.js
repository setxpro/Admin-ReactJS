import React from 'react';

import * as C from './styles';

import ItemsPercentage from '../../Components/DashboardComponents/ItemsPercentage';

import {FeaturesPercentage, RevenueSalesPurchaseDB} from '../../db/HomeInfo';
import TransactionHistory from '../../Components/DashboardComponents/TransactionHistory';
import TableOrderStatus from '../../Components/DashboardComponents/TableOrderStatus';
import OpenProjects from '../../Components/DashboardComponents/OpenProjects';
import RevenueSalesPurchase from '../../Components/DashboardComponents/RevenueSalesPurchase';
import MessageComponent from '../../Components/DashboardComponents/Message';
import PortSlideComponent from '../../Components/DashboardComponents/PortSlide';
import TodoComponent from '../../Components/DashboardComponents/TodoComponent';

function DashboardScreen() {
  return (
      <C.Container>
          <C.ContentFeaturesPercentage>
              {FeaturesPercentage.map((item, index) => (
              <ItemsPercentage 
                key={index}
                value={item.value}
                title={item.title}
                percentual={item.percentual}
              />
              ))}
          </C.ContentFeaturesPercentage>
          <C.ContentGraficProjectsInfo> 
                  <TransactionHistory/>
                  <OpenProjects/>
          </C.ContentGraficProjectsInfo>
          <C.ContentRevenueSalesPurchase>
          {RevenueSalesPurchaseDB.map((item, index) => (
            <RevenueSalesPurchase
              key={index}
              title={item.title}
              value={item.value}
              icon={item.icon}
              resum={item.resum}
              percent={item.percent}
            />
            ))}
          </C.ContentRevenueSalesPurchase>
          <C.OrderStatus>
              <TableOrderStatus/>
          </C.OrderStatus>
          <C.MessagePortfolioSlideTodo>
              
              <MessageComponent/>
              <PortSlideComponent/>
              <TodoComponent/>
          </C.MessagePortfolioSlideTodo>
      </C.Container>
  );
}

export default DashboardScreen;