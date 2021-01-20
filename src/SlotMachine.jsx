 import React from "react";
 import Match from "./Matching";
 import NotMatch from "./NotMatching";


 const SlotM=(props)=>{
   let {x,y,z}=props; // object destructuring
   return (
       <>

{((x===y) && (y===z))?<Match a={x} b={y} c={z}/>: <NotMatch a={x} b={y} c={z}/> }
</>
 )}

 export default SlotM;