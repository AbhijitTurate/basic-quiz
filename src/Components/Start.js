import React from 'react'

const Start = ({ props }) => {

    const StartQuiz = () => props(true)
    return (
        <div>
            <h1 className='Heading'>
                Take the Quiz!!
            </h1>
            <h3 className='subHeading'>
                Whenever, you want
            </h3>
            <button className='StartQuiz' onClick={StartQuiz}>
                Start Quiz
            </button>
        </div>
    )
}

export default Start