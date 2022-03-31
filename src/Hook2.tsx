import React from "react";
import { useState, useEffect } from "react";


function currentScore() {
    return 100
}
function getScoreByBoardName(boardName: string){
    if(boardName === 'boardA'){
        return 1000
    }
    if(boardName === 'boardB'){
        return 2000
    }
    return 0
}

function useGetTotalScore(boardName: string){
    const [ score , setScore ] = useState(0)
    useEffect(() => {
        const currentTotalScore = currentScore() + getScoreByBoardName(boardName)
        setScore(currentTotalScore)
    },[])
    return score 
}



const ScoreBoardA: React.FC = () => {
    const score = useGetTotalScore('boardA')
    return<>

        
        <p>A Total Score:{score}</p>
    </>
}


const ScoreBoardB: React.FC = () => {
    const score = useGetTotalScore('boardB')
    return<>
        <p>B Total Score:{score}</p>
    </>
}


const Hook2: React.FC = () => {
    return<>
        <ScoreBoardA/>
        <ScoreBoardB/>
    </>
}

export default Hook2