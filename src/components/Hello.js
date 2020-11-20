import React from 'react';

function Hello() {
    // return( 
    //     <div>
    //         <h1>Hello Vishwas</h1>
    //     </div>
    // )
    return React.createElement('div',{className:'dummyClass',id:'first'},React.createElement('h1',{className:'dummyhone',id:'firsthone'},'Hello Feroz'));
}
export default Hello