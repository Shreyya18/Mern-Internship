import React from "react";
import './style.css'
function FirstApp(){
    const myStyle={
        color:"lightblue",
        backgroundColor:""
    }
    return(
        <div>
            <h1>Hello From First</h1>
            <h3 style={{backgroundColor:"magenta", color:"blue", border:"2px solid black", padding:"10px", textAlign:'center' }}>INLINE CSS</h3>
            <h4 style={myStyle}>INTERNAL CSS</h4>

            <h5 className="external">External CSS</h5>
        </div>
    )
}

export default FirstApp