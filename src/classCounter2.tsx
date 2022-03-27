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

type MinProps = {}
type MinState = {
    count: number
}

class Min extends React.Component<MinProps, MinState>{
    constructor(props: MinProps){
        super(props)
        this.state = {
            count: 0
        }
    }
    countMinusHandler(){
    }
    render(): React.ReactNode{
        return<>
            <button>-1</button>
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
    }

    countClickHandler(){
        console.log('接到了');
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
            <Min/>
        </>
    }
    componentDidUpdate(){
        console.log('state', this.state);
        
    }
}

export default App5