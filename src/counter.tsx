import react, { useState } from 'react'
type BtnProps = {
    current: number
    btnOnClick: () => void
}
    

const Btn: react.FC<BtnProps> = ( {current, btnOnClick} ) => {
    
    return (
        <button onClick={btnOnClick}>
            加1,
            <span>
                目前的數字: {current}
            </span>
        </button>
    )
}
const App3: react.FC = () => {
    const [ num2, setNum2 ] = useState(0)
    function counter () {
        setNum2(num2 + 1)
    }
    console.log(num2);
    return ( 
        <>
            <h1>計數器: {num2}</h1>
            <Btn current={num2} btnOnClick={counter}/>
        </>
    )
}

export default App3