import React from 'react';
import { GlobalStyle } from './Components/GlobalStyle';
import Home from './pages/Home';
import Cards from './pages/Cards';
import Tentativas from './pages/Tentativas';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



function App() {
  
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
        
          <Route exact path='/' element={<Home />} />
          <Route path='/cards' element={<Cards />} />
          <Route path='/tentativas' element={<Tentativas />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
