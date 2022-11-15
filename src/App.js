import React, { useContext } from 'react';
import { GlobalStyle } from './Components/GlobalStyle';
import Home from './Components/Home';
import Cards from './Components/Cards';
import GameOver from './Components/GameOver';
import Tentativas from './Components/Tentativas';
import { QuizContext } from './context/quiz';




function App() {

  const [ 
    numeroDeQuestoes, 
    setNumeroDeQuestoes, 
    dadosApi, 
    setDadosApi,
    stages,
    gameStages,
    setGameStages,
    indice,
    setIndice,
    score,
    setScore,
    respostaJaSelecionada,
    setRespostaJaSelecionada
    ] = useContext(QuizContext)

  
  return (
    <div className="App">

      <GlobalStyle />

      { gameStages === 'Start' && <Home /> }
      { gameStages === 'Playing' && <Cards /> }
      { gameStages === 'End' && <GameOver /> }
      { gameStages === 'Report' && <Tentativas /> }

    </div>
  );
}

export default App;
