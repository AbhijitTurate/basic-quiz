import React, { useState } from 'react'
import QB from './Questions';
const AllQuest = QB.QuestionBank
const len = AllQuest.length
var flag;
const Quiz = () => {

    const [QuizzDisplay, setQuizzDisplay] = useState(
        AllQuest.slice(0, 2)
    );

    const [ShowScore, setShowScore] = useState(false)
    const [CurrQuiz, setCurrQuiz] = useState(0)

    const [Score, SetScore] = useState(0)

    const UpdateScore = (isCorrect) => {

        // setCurrQuiz(QuizNo => QuizNo)
        if (isCorrect) {
            SetScore(Score => Score + 1);
        }
        const nextQuiz = CurrQuiz + 1;
        if (nextQuiz < AllQuest.length) {
            setCurrQuiz(nextQuiz);
        }
        else {
            setShowScore(true);
        }
    }
    const UpdateDisplay = (Displaylen) => {
        if (Displaylen < len) {
            setQuizzDisplay(AllQuest.slice(Displaylen, Displaylen + 2))
        }
    }
    return (

        <div className='Quiz-App'>
            {ShowScore ? (
                <h1 className='score-section'>
                    You scored {Score} out of {AllQuest.length}
                </h1>
            ) : (
                <>
                    {
                        QuizzDisplay.map((item) => {
                            return (
                                <div className='Quiz-app'>
                                  
                                        <h1 className='Question-text'>{item.questionText}</h1>
                                    
                                    <div className='answer-section'>
                                        {
                                            item.answerOptions.map((answerOption) => (
                                                <button className='Quiz-Options' key={answerOption.answerText} onClick={() => UpdateScore(answerOption.isCorrect)} >{answerOption.answerText}</button>
                                            )
                                            )
                                        }
                                    </div>

                                </div>

                            )

                        })
                    }
                    <div className='Button-Div'>
                    <button onClick={() => UpdateDisplay(QuizzDisplay.length)} className="Next-Button"> NEXT </button>
                    </div>
                </>
            )}
        </div>

    )
}

export default Quiz