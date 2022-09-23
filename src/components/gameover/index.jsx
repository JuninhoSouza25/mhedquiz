import { useContext } from "react"
import { QuizContext } from "../../context/quiz"
import {AiOutlineStar, AiFillStar} from 'react-icons/ai';
import {GiCheckMark} from 'react-icons/gi';
import {MdOutlineQuiz} from 'react-icons/md'
function GameOver( {player, setFieldPlayer, setPlayer} ) {
    const [quizState, dispatch] = useContext(QuizContext)



    function handleClick(){
      dispatch({type: 'NEW_GAME'})
      dispatch({type: "ATTEMPT"})
      setFieldPlayer(true)
      setPlayer("")
    }

    let gold = (quizState.questions.length * 10) / 3 * 2
    let bronze = (quizState.questions.length * 10) / 3
    let size = 20

  return (
    <div className="container-game-over">
        <h2>Fim de jogo!</h2>
        {quizState.score >= gold  ? <p>Parabéns {player} você mostrou que conhece mesmo seus colegas!</p> : 
        quizState.score < gold && quizState.score >= bronze ? <p>Parabéns {player} você conhece seus colegas, mas precisa melhorar um pouco mais</p> :
        <p>Olá {player}, você não foi tão bem dessa vez, olhe com mais atenção as fotos e tente novamente!</p>}
        <div className="container-card">
          <div className="card score">
            <p className="card-title">Pontuação</p>
            <p className={`card-content ${quizState.score >= gold ? "gold" : quizState.score < gold && quizState.score >= bronze ? "silver" : "bronze"}`}>{quizState.score}</p>
            {quizState.score >= gold ? 
            <div className="icon">
              <AiFillStar color="#FFD700" size={size}/>
              <AiFillStar color="#FFD700" size={size}/>
              <AiFillStar color="#FFD700" size={size}/>
              <AiFillStar color="#FFD700" size={size}/>
              <AiFillStar color="#FFD700" size={size}/>
            </div> : 
              quizState.score < gold && quizState.score >= bronze ? 
            <div className="icon">
              <AiFillStar color="#C3C7C7" size={size}/>
              <AiFillStar color="#C3C7C7" size={size}/>
              <AiFillStar color="#C3C7C7" size={size}/>
              <AiOutlineStar color="#C3C7C7" size={size}/>
              <AiOutlineStar color="#C3C7C7" size={size}/>
            </div>
             :
            <div className="icon">
              <AiFillStar color="#CD7F32" size={size}/>
              <AiFillStar color="#CD7F32" size={size}/>
              <AiOutlineStar color="#CD7F32" size={size}/>
              <AiOutlineStar color="#CD7F32" size={size}/>
              <AiOutlineStar color="#CD7F32" size={size}/>
            </div>}
          </div>
          <div className="card">
            <p className="card-title">Acertos</p>
            <p className="card-content">{quizState.questionsAnswered}</p>
            {quizState.score >= gold ? 
            <div className="icon">
              <GiCheckMark color="green" size={size} />
              <GiCheckMark color="green" size={size} />
              <GiCheckMark color="green" size={size} />
              <GiCheckMark color="green" size={size} />
              <GiCheckMark color="green" size={size} />
            </div> : 
              quizState.score < gold && quizState.score >= bronze ? 
            <div className="icon">
              <GiCheckMark color="green" size={size} />
              <GiCheckMark color="green" size={size} />
              <GiCheckMark color="green" size={size} />
            </div>
             :
            <div className="icon">
              <GiCheckMark color="green" size={size} />
            </div>}
          </div>
          <div className="card">
            <p className="card-title">Tentativas</p>
            <p className="card-content">{quizState.attempt}</p>
            <div className="icon"><MdOutlineQuiz color="#15598c" size={size} /></div>
          </div>
        </div>
        <p>Printe essa tela e nos envie!</p>
        <button onClick={handleClick}>Jogar novamente</button>
    </div>
  )
}

export default GameOver