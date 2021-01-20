import React from "react";

const Match=(props) =>{
    let {a,b,c}=props;
    return(
    <>
    <div className="part">
    <h1 className="icons">{a} {b} {c}</h1>
     <h4> This is Matching</h4>
     <hr/>
     </div>
    </>
    )
}

export default Match;