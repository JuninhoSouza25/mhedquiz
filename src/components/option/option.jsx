import { useContext } from "react"
import { QuizContext } from "../../context/quiz"

const Option = ({ option, selectOption, answer }) => {
  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div className={`${quizState.answerSelected ? "selected" : " "}`} onClick={() => selectOption()}>
      <p>{option}</p>
    </div>
  )
}

export default Option