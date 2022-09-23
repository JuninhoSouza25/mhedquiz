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
            <div>
              <AiFillStar color="#FFD700" size={25}/>
              <AiFillStar color="#FFD700" size={25}/>
              <AiFillStar color="#FFD700" size={25}/>
              <AiFillStar color="#FFD700" size={25}/>
              <AiFillStar color="#FFD700" size={25}/>
            </div> : 
              quizState.score < gold && quizState.score >= bronze ? 
            <div>
              <AiFillStar color="#C3C7C7" size={25}/>
              <AiFillStar color="#C3C7C7" size={25}/>
              <AiFillStar color="#C3C7C7" size={30}/>
              <AiOutlineStar color="#C3C7C7" size={25}/>
              <AiOutlineStar color="#C3C7C7" size={25}/>
            </div>
             :
            <div>
              <AiFillStar color="#CD7F32" size={25}/>
              <AiFillStar color="#CD7F32" size={25}/>
              <AiOutlineStar color="#CD7F32" size={25}/>
              <AiOutlineStar color="#CD7F32" size={25}/>
              <AiOutlineStar color="#CD7F32" size={25}/>
            </div>}
          </div>
          <div className="card">
            <p className="card-title">Acertos</p>
            <p className="card-content">{quizState.questionsAnswered}</p>
            {quizState.score >= gold ? 
            <div>
              <GiCheckMark color="green" size={25} />
              <GiCheckMark color="green" size={25} />
              <GiCheckMark color="green" size={25} />
              <GiCheckMark color="green" size={25} />
              <GiCheckMark color="green" size={25} />
            </div> : 
              quizState.score < gold && quizState.score >= bronze ? 
            <div>
              <GiCheckMark color="green" size={25} />
              <GiCheckMark color="green" size={25} />
              <GiCheckMark color="green" size={25} />
            </div>
             :
            <div>
              <GiCheckMark color="green" size={25} />
            </div>}
          </div>
          <div className="card">
            <p className="card-title">Tentativas</p>
            <p className="card-content">{quizState.attempt}</p>
            <MdOutlineQuiz color="#15598c" size={25} />
          </div>
        </div>
        <p>Printe essa tela e nos envie!</p>
        <button onClick={handleClick}>Jogar novamente</button>
    </div>
  )
}

export default GameOver