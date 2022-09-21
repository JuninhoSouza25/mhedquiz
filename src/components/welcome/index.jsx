import { useContext, useState } from "react"
import { QuizContext } from "../../context/quiz"

function Welcome() {
    const [quizState, dispatch] = useContext(QuizContext)
    
    return (
        <div className="container">
            <p>Clique abaixo para começar o jogo!</p>
            <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Quiz</button>
        </div>
    )
}

export default Welcome