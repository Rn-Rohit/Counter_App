import React,{useState} from 'react'
import "./style.css"

const App = ()=>{

    let [score, setScore] = useState(0)
    
    return(
        <>
        <div>
            <div className="heading">
                <h1> Counter </h1>
            </div>
        </div>

        <div className="container">

             <div className="end">
                <h1> Score : {score}</h1>
             </div>   

             <div className="main">
                <button className="button green" onClick={()=>(score<=24)? setScore(score+1) : ""}> Increment </button>
                <button className="button red" onClick={()=>(score>0)? setScore(score-1) : "" }> Decrement </button>
                <button className="button black" onClick={()=>{setScore(0)}}> Reset </button>
             </div>

        </div>       

        </>
    )
}

export default App






