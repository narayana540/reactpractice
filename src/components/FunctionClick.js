import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log('button clicked');
    }
    return (
        <div>
            <button onClick={clickHandler}>clickMe</button>
        </div>
    )
}

export default FunctionClick
