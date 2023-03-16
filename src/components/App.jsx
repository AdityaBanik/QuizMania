
import Home from "./Home"
import Quiz from "./Quiz"
import { useState } from "react"

import blob1 from '../assets/blob1.png';
import blob2 from '../assets/blob2.png';
function App(){
    const [play,setPlay] = useState(false)
    
    return (<>
        {
            play? <Quiz play={play} setPlay={setPlay}/> :  <Home setPlay={setPlay}/>
        }
            <img src={blob1} alt="blob1" id="blue-blob" />
            <img src={blob2} alt="blog2" id="yellow-blob"/>
        </>
    )
}

export default App



