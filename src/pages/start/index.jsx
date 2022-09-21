import { useContext, useEffect, useState } from 'react';
import { QuizContext } from '../../context/quiz';

import Welcome from '../../components/welcome';
import Question from '../../components/question';
import GameOver from '../../components/gameover';

export default function Start(){
    const [quizState, dispatch] = useContext(QuizContext)
    const [player, setPlayer] = useState("")
    const [fieldPlayer, setFieldPlayer] = useState(true)

    useEffect(() => {
        dispatch({type: "REORDER_QUESTIONS"})
    }, [])

    function handlePlayer(e){
        e.preventDefault()
        if (player){
            setFieldPlayer(false)
        }
    }

    return(
        <div className="container">
            <h1>MhedQuiz</h1>
            {fieldPlayer && (
                <div>
                    <p>Digite seu nome e clique em entrar:</p>
                    <input type="text" placeholder='Digite seu nome aqui' value={player} onChange={(e) => setPlayer(e.target.value)} />
                    <button onClick={handlePlayer}>Entrar</button>
                </div>
            )}
            {!fieldPlayer && quizState.gameStage === "Start" && <Welcome player={player}/>}
            {quizState.gameStage === "Playing" && <Question />}
            {quizState.gameStage === "End" && <GameOver player={player} setFieldPlayer={setFieldPlayer} setPlayer={setPlayer} />}
        </div>
    )
}