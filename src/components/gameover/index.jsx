import { useContext } from "react"
import { QuizContext } from "../../context/quiz"

function GameOver( {player} ) {
    const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div className="container">
        <h2>Fim de jogo!</h2>
        <p>Parabens {player} você chegou no final do MhedQuiz!</p>
        <p>Pontuação: {quizState.score} </p>
        <p>Você acertou {quizState.questionsAnswered} de {quizState.questions.length}{" "} perguntas.</p>
        <button onClick={() => dispatch({type: 'NEW_GAME'})}>Jogar novamente</button>
    </div>
  )
}

export default GameOver