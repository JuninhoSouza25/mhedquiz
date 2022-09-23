import { useContext, useState, useEffect } from 'react';
import { QuizContext } from '../../context/quiz';

import Option from '../option/option';

function Question() {
  const [quizState, dispatch] = useContext(QuizContext);
  const [segundos, setSegundos] = useState(45);
  const [minutos, setMinutos] = useState(0);
  const currentQuestion = quizState.questions[quizState.currentQuestion];

  let timer
  useEffect(() => {
    timer = setInterval(() => {
      setSegundos(segundos-1);
      if(segundos === 0){
        dispatch({ type: "CHANGE_QUESTION"}) ;
        setSegundos(45)
      }
  }, 1000)
    if(quizState.answerSelected){
      clearInterval(timer)

    }
    return () => clearInterval(timer) ;
});

  
  const onSelectOption = (option, time) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload:{ answer: currentQuestion.answer, option, time},
    })
  }

  function handleClick(){
    dispatch({ type: "CHANGE_QUESTION"})
    setSegundos(45)
  }

  let timeBar

  if (segundos >= 30){
    timeBar = "progress-full"
  }else if(segundos < 30 && segundos >= 15){
    timeBar = "progress-middle"
  }else if(segundos < 15){
    timeBar = "progress-low"
  }

  return (
    <div className='container-question'>
      <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
      <div className='container-progress'>
          <div className='timer'>{minutos < 10 ? "0" + minutos : minutos}:{segundos < 10 ? "0" + segundos : segundos}</div>
          <progress className={timeBar} value={segundos} max="45">{minutos < 10 ? "0" + minutos : minutos}:{segundos < 10 ? "0" + segundos : segundos}</progress>
      </div>
      <p id='question'>Quem é essa criança?</p>
      <div>
        <img className='img-question' src={currentQuestion.image} alt="foto do funcionario criança" />
      </div>
      <div className='options-container'>
        {currentQuestion.options.map((option) => (
          <Option
            option={option} 
            key={option} 
            answer={currentQuestion.answer}
            selectOption={() => onSelectOption(option, segundos)}
          />
        ))}
      </div>
      {quizState.answerSelected && (
        <button className='btn-continue' onClick={handleClick}>Continuar</button>
      )}
    </div>
  )
}

export default Question