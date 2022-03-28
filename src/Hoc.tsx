import React from 'react'


type AProps = {}
type AState = {}
type BProps = {}
type BState = {}

function getCurrentScore() {
    return 100
}

function getScoreByBoardName(boardName: string) {
    if(boardName === 'boradA'){
        return 200
    }if(boardName === 'boardB'){
        return 1000
    }else{
        return 0
    }
}


class scoreBoradB extends React.Component<BProps, BState>{    

}
const App7: React.FC = () => {
    return<>
        {/* <scoreBoradA />
        <scoreBoradB /> */}
    </>
}

export default App7