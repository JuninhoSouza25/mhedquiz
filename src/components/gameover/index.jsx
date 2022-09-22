import { useContext } from "react"
import { QuizContext } from "../../context/quiz"

function GameOver( {player, setFieldPlayer, setPlayer} ) {
    const [quizState, dispatch] = useContext(QuizContext)



    function handleClick(){
      dispatch({type: 'NEW_GAME'})
      dispatch({type: "ATTEMPT"})
      setFieldPlayer(true)
      setPlayer("")
    }

  return (
    <div className="container">
        <h2>Fim de jogo!</h2>
        <p>Parabens {player} você chegou no final do MhedQuiz!</p>
        <p>Pontuação: {quizState.score} </p>
        <p>Você acertou {quizState.questionsAnswered} de {quizState.questions.length}{" "} perguntas.</p>
        <p>Numero de tentativas: {quizState.attempt}</p>
        <button onClick={handleClick}>Jogar novamente</button>
    </div>
  )
}

export default GameOver