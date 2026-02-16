import React from 'react'
import image1 from '../assets/1.jpg'
const Testing = () => {
  const myStyle = {
    color: "red",
    backgroundColor:"black",
    padding:"10px",
    border:"2px solid red"
  }
  return (
    <div>
        <h2 style={{color: "blue", backgroundColor: "lightgray"}}>Hello</h2>
        <h3 style={myStyle}>Internal CSS</h3>

        <img src={image1} alt="" height={200} width={200}/>
    </div>
  )
}

export default Testing