import React, { PureComponent } from "react";

class Purecompoundse extends PureComponent{
    constructor(){
        super();
        this.state={
            count : 0,
            toggle : false,
        }

    }
    toggle_button =() =>{
        this.setState((bool) => ({toggle : !bool.toggle}))
    }

    incre = () =>{
        if (this.state.toggle){
        this.setState((prev)=>({count : prev.count+1}))
        }
    }
    render(){
        console.log("This is Pure Component")
        let {count , toggle} = this.state
        console.log(toggle)

        var theme = {
            backgroundColor : (toggle ? "green":"red")
        }
        var count_theme = {
            backgroundColor : (toggle ? "black":"white")

        }
        return(
            <>
                <h1>Pure component</h1>
                <h3>count : {count}</h3>
                <button style={theme} onClick={this.toggle_button}>Toggle</button>
                <button style={count_theme} onClick={this.incre}>increment</button>
            </>
        )
    }
}

export default Purecompoundse