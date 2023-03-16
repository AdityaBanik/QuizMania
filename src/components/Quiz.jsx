
import { useState, useEffect } from "react"
import Question from './Question'

function Quiz(props) {
    const {setPlay} = props

    const [results, setResults] = useState([])
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [randomNumbers, setRandomNumbers] = useState([])
    const [count, setCount] = useState(0)
    
    function startQuiz(){
        setPlay(false)
    }

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                setResults(data.results)
                const array = []
                for (let i = 0; i < data.results.length; i++) {
                    const randomNo = Math.floor(Math.random() * 4)
                    array.push(randomNo)
                }
                setRandomNumbers(array)
            })
            .catch(error => {
                console.error('Error:', error);
            })
    }, [])

    function updateCount() {
        setCount(pre => pre + 1);
    }


    const questions = results.map(
        (result, index) => {

            const { question, correct_answer, incorrect_answers } = result



            const options = [...incorrect_answers]
            options.splice(randomNumbers[index], 0, correct_answer)



            return <Question
                question={question}
                correctAnswer={correct_answer}
                options={options}
                questionNumber={'question' + index}
                key={'question' + index}
                isSubmitted={isSubmitted}
                updateCount={updateCount}
            />

        }
    )

    function showAnswers(event) {
        event.preventDefault()
        setIsSubmitted(true)
    }

    return (
        <main>
            {results.length?
                <form onSubmit={showAnswers}>
                    {questions}

                    {!isSubmitted && <button className="med-btn">Check answers</button>}
                </form> :  <p>loading</p>
            }
            {
                    isSubmitted &&
                    <section className="play-again">
                        <p>You scored {count}/5 correct answers</p>
                        <button className="med-btn" onClick={startQuiz}>Play again!</button>
                    </section>
            }

        </main>
    )
}

export default Quiz