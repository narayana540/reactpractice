import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    
    incrementValue(){
        // this.setState({
        //     count:this.state.count+1
        // },()=>{
        //     console.log("the callback value" ,this.state.count);
        // })
        this.setState(prevState => ({
            count:prevState.count+1
        }))
       
        console.log(this.state.count);
    }
    incrementFive(){
        this.incrementValue();
        this.incrementValue();
        this.incrementValue();
        this.incrementValue();
        this.incrementValue()
    }


    render() {
        return (
            <div>
                <h2> Count-{this.state.count}</h2>
                <button onClick={()=>this.incrementFive()}>Increment</button>

            </div>
        )
    }
}

export default Counter
