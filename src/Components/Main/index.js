import React, { useContext } from 'react';
import { SidebarAreaContext } from '../../context/SidebarContextArea';
import { ThemeContext } from '../../context/ThemeContext';
import { GetRouter } from '../../Routes';
import { Layout } from '../../Styles/Layout';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

import * as C from './styles';

function Main() {

  const { openSidebar } = useContext(SidebarAreaContext);
  const { theme } = useContext(ThemeContext);
  return (
    
      <C.Container>
          <Sidebar openSidebar={openSidebar}/>
          <Navbar/>
         <Layout  mode={openSidebar} theme={theme}>
            <GetRouter/>
         </Layout>
      </C.Container>
  );
}

export default Main;