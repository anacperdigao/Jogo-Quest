import React from 'react';
import { GlobalStyle } from './Components/GlobalStyle';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
        
          <Route exact path='/' element={<Home />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
