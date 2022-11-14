import React, { useContext } from 'react';
import { GlobalStyle } from './Components/GlobalStyle';
import Home from './Components/Home';
import Cards from './Components/Cards';
import GameOver from './Components/GameOver';
import { QuizContext } from './context/quiz';




function App() {

  const [quizState, dispatch] = useContext(QuizContext)
  
  return (
    <div className="App">

      <GlobalStyle />

      { quizState.gameStage === 'Start' && <Home /> }
      { quizState.gameStage === 'Playing' && <Cards /> }
      { quizState.gameStage === 'End' && <GameOver /> }
      

    </div>
  );
}

export default App;
