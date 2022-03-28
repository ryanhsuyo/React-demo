import React from "react";

type BtnProps = {
    clickHandler: () => void
}
type BtnState = {}

class Btn extends React.Component<BtnProps, BtnState>{
    constructor(props: BtnProps){
        super(props)
    }    
    render(): React.ReactNode{
        return<>
            <button onClick={this.props.clickHandler}>+1</button>
        </>
    }
}

type MinProps = {
    minHandler: () => void
}
type MinState = {}

class Min extends React.Component<MinProps, MinState>{
    constructor(props: MinProps){
        super(props)
        }
    
    render(): React.ReactNode{
        return<>
            <button onClick={this.props.minHandler}>-1</button>
        </>
    }
}



type AppProps = {}
type AppState = {
    count: number
}


class App5 extends React.Component<AppProps, AppState>{
    constructor(props: AppProps){
        super(props)
        this.state = {
            count: 0
        }
        this.countClickHandler = this.countClickHandler.bind(this)
        this.countMinusHandler = this.countMinusHandler.bind(this)
    }
    
    countMinusHandler(){
        console.log('減法');
        this.setState((prevState) => {
            return{
                count: prevState.count - 1
            }
        })
        
    }
    countClickHandler(){
        console.log('加法');
        this.setState((prevState) => {
            return{
                count: prevState.count + 1
            }
        })
    }

    render(): React.ReactNode{
        return<>
            <h1>Count: {this.state.count}</h1>
            <Btn clickHandler={this.countClickHandler}/>
            <Min minHandler={this.countMinusHandler}/>
        </>
    }
    componentDidUpdate(){
        console.log('state', this.state);
        
    }
}

export default App5