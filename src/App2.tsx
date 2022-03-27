import { ReactNodeLike } from "prop-types";
import React, { useState } from "react";
import './App.css'
import Header from "./components/Header";
import Body from "./components/Body";

type BtnProps = {
    currentNum: number
    onClickHandler: () => void
}
const Btn: React.FC<BtnProps> = ( {currentNum, onClickHandler} ) => {
    return (
        <button onClick={onClickHandler}>
            加1,
            <span>
                目前的總數: {currentNum}
            </span>
        </button>
    )
}
const App2: React.FC = () => {
    const [num, setNum] = useState(0)
    function BtnClick() {
        setNum(num + 1)
    }
    return <>
        <Header/>
        <Body/>
        <div>
            <h1>計數器:{num}</h1>
        </div>
        <Btn currentNum={num} onClickHandler={BtnClick}/>
    </>
}

export default App2