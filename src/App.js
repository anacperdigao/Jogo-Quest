import React from 'react';
import './App.css';
import ContainerGeral from './Components/ContainerGeral';
import { GlobalStyle } from './Components/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <ContainerGeral />
      </div>
    </>
  );
}

export default App;
