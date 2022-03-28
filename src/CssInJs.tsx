import React from 'react'
import styled from 'styled-components'

type BtnType = {
    colorStatus: boolean
}

const Button = styled.button<BtnType>`
    color: ${props => props.colorStatus === false ? 'black' : 'purple'};
    font-size: 20px;
    background-color: yellow;
    
`
const style1 = {
    color: 'red'
}
const style2 = {
    color: 'blue'
}

const App6: React.FC = () => {
    const state = true
    return<>
        <h1 style={state ? style1 : style2}>test</h1>
        <Button colorStatus={true}>+1</Button>
    </>
}

export default App6