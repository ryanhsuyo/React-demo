import { useState } from 'react'

type AppState = {
    count: number
}

const App: React.FC = () => {
    const [ count, setCount] = useState(0) 
    function counter(){
        setCount(count + 1)

    }

    return<>
        <h1>Counter: {count}</h1>
        <button onClick={counter}>+1</button>
    </>
}

export default App