

function Home(props){
    const {setPlay} = props

    function startQuiz(){
        setPlay(true)
    }
    return (
        <>
            <h1>QuizMania</h1>
            <p>Let's see what you got!</p>
            <button className="big-btn" onClick={startQuiz}>Start quiz</button>
        </>
    )
}

export default Home