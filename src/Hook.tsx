import React  from "react"
import {useState, useEffect } from 'react'

function getCurrentScore(){
    return 100
}

function getScoreByBoardName(boardName: string){
    if(boardName === 'boardA'){
        return 200
    }
    if(boardName === 'boardB'){
        return 1000
    }
    return 0
}
//自定義Hook (class Hoc )
function useGetTotalScore(boardName: string){
    const [score, setScore] = useState(0)
    useEffect(() => {
        console.log('mount');
        const currentScore = getCurrentScore() + getScoreByBoardName(boardName)
        setScore(currentScore) 
    },[])
    return score
}

const ScoreBoardA: React.FC = () => {
    // const [score, setScore] = useState(0)
    // useEffect(() => {
    //     console.log('mount');
    //     const currentScore = getCurrentScore() + getScoreByBoardName('boardA')
    //     setScore(currentScore)
        
    // },[])
    const score = useGetTotalScore('boardA')
    return <p>A totalScore: {score}</p>
}

const ScoreBoardB: React.FC = () => {
    // const [ score, setScore ] = useState(0)
    // useEffect(() => {
    //     const currentScore = getCurrentScore() + getScoreByBoardName('boardB')
    //     setScore(currentScore)
    // },[])
    const score = useGetTotalScore('boardB')
    return <p>B totalScore: {score}</p>
}

type HookProps = {
    name1: string
}

const Hook: React.FC = () => {

    return<>
    <ScoreBoardA/>
    <ScoreBoardB/>
    </>
}

export default Hook