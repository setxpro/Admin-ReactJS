import React from 'react';
import Main from './Components/Main';
import { SidebarAreaProvider } from './context/SidebarContextArea';
import { ThemeProvider } from './context/ThemeContext';

import * as C from './Styles/AppStyle';

function App() {


  return (
    <ThemeProvider>
      <C.Container>
      <SidebarAreaProvider>
        <Main/>
      </SidebarAreaProvider>
      </C.Container>
      </ThemeProvider>
  );
}

export default App;