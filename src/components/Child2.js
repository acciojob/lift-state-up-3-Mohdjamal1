import React from "react";

function Child2({setOption}){

    return(
        <div className="child2">
            <h1>Child Component 2</h1>
            <button onClick={()=> setOption('Option 2')}>Option 2</button>
        </div>
    )
}

export default Child2;