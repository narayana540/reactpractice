import React, { Component } from 'react'

export class Usergreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {  
       return this.state.isLoggedIn && <div>Welcome Naveen</div>  //short circuit
    }
}
        
        // return(this.state.isLoggedIn ?
        //     <div>Hello Naveen</div> : <div>Hello Guest</div>    //conditional
        //     )


        
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Hello Naveen</div>
        // }
        // else {
        //     message = <div>Hello Guest</div>
        // }

        // return <div>{message}</div>



        // if (this.state.isLoggedIn) {
        //     return <div>Hello Naveen</div>

        // }
        // else{
        //     return <div>Hello Guest</div>
        // }



export default Usergreeting
