import React from "react";
import TestItem from "./TestItem";

const Test = (props)=>{

    let tests = props.state
        .map(t => <TestItem name={t.name}/>)
    return(
      <div>
          {tests}
      </div>
    )
}

export default Test