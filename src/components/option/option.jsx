import { useContext } from "react"
import { QuizContext } from "../../context/quiz"

const Option = ({ option, selectOption, answer }) => {
  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div 
    onClick={() => selectOption()} 
    className={`option ${quizState.answerSelected === option ? "selected" : " "}  ${!quizState.answerSelected  ? " " : " "}`} >
      <p>{option}</p>
    </div>
  )
}

export default Option