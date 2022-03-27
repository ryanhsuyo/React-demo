import React from 'react'
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript'

type BtnProps = {
    clickHandler: () => void
}
type BtnState= {}

class Btn extends React.Component<BtnProps, BtnState>{
    constructor(props: BtnProps){
        super(props)
    }
    render(): React.ReactNode{
        return <button onClick={this.props.clickHandler}>+1</button>
    } 
    componentWillUnmount(){
        console.log('Btn Unmount');
    }
}


type AppProps = {}
type AppState = {
    count: number
}

class App4 extends React.Component<AppProps, AppState>{
    constructor(props: AppProps) {
        super(props)
        this.state = {
            count: 0
        }
        
        //this綁定app
        this.countClickHandler = this.countClickHandler.bind(this)
    }

    countClickHandler(){
        this.setState((prevState) => {
            return{
                count: prevState.count + 1
            }
        })
        
    }
    componentDidMount(){
        console.log('mount');
        
    }
    componentDidUpdate(){
        console.log('update', this.state);
    }
    componentWillUnmount(){
        console.log('willUnmount');
    }

    render() :React.ReactNode{
        return <>
            <h1>Count: {this.state.count}</h1>
            
            {this.state.count === 5 ? null : <Btn clickHandler={this.countClickHandler}/>}
        </>
    } 
}

export default App4