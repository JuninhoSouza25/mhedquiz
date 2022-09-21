import { useContext } from "react"
import { QuizContext } from "../../context/quiz"

function Welcome({player}) {
    const [quizState, dispatch] = useContext(QuizContext)
    
    return (
        <div className="container">
            <p>Olá {player}!</p>
            <p>O objetivo desse jogo é bem simples, descubra quem são seus colegas de trabalho quando criança.</p>
            <p>Você terá 45 segundos para acertar cada foto.</p>
            <p>No final, você receberá sua pontuação.</p>
            <p>Como já comum nos nossos jogos, printe a tela final e nos envie!</p>
            <p>Vamos começar?</p>
            <p>Clique abaixo para iniciar o jogo!</p>
            <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Quiz</button>
        </div>
    )
}

export default Welcome