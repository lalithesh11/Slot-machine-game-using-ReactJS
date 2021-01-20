import React from "react";
import SlotM from "./SlotMachine";

const App = () =>{
    return (
        <>
<h1 className="heading_style">🎰 Welcome to <span style={{fontSize:"82px",backgroundColor:"yellowgreen"}} >Slot Machine</span> Game 🎰</h1>
<div className="slotMachine">
<SlotM x='🎧' y='🎧' z='🎧'/>
<SlotM x='🎧' y='🎧' z= '🌍'/>
<SlotM x='😆' y='😆' z='😆' />
<SlotM x='🚲' y='🚴‍♂️' z= '🚴‍♀️'/>
<SlotM x='🦁' y='🐯' z='🐘'/>
</div>
</>
    )
}
export default App;