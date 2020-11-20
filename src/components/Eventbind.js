import React, { Component } from 'react'

export class Eventbind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello'
        }
        // this.clickHandler=this.clickHandler.bind(this)
    }
    clickHandler = () => {
        this.setState({
            message:'Good bye!!'
        })
        console.log(this);
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Bind</button> */}
                {/* <button onClick={()=>this.clickHandler()}>Bind</button> */}
                {/* <button onClick={()=>this.clickHandler()}>Bind</button> */}
                <button onClick={this.clickHandler}>click</button>

            </div>
        )
    }
}

export default Eventbind
