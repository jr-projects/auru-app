import { ThemeProvider } from '@mui/material';
import React from 'react';
import './App.css';
import Routers from './router';
import AuruTheme from './theme';


function App() {
  return (
    <ThemeProvider theme={AuruTheme}>
      <div className="App">
        <Routers></Routers>
      </div>
    </ThemeProvider>
  );
}

export default App;
