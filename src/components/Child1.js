import React from "react";

function Child1({setOption}){

    return(
        <div className="child1">
            <h1>Child Component 1</h1>
            <button onClick={()=> setOption('Option 1')}>Option 1</button>
        </div>
    )
}

export default Child1;