import Button from '@mui/material/Button'
import React from 'react'

const Arrowfunction = () => {
    // Normal function
    function Myfunction(){
        return(
            <h3>Normal function</h3>
        )
    }

    // Arrow function
    const Myarrow=()=>{
        return(
            <h3>Arrow function</h3>
        )
    }

    // Arrow function with single statement
    const SingleArrow=() => <h3>Single statement Arrow function</h3>

    const HandleClick=()=>alert("Button clicked!")

    const HandleArguments=(name)=> alert("hello "+name)
    
  return (
    <div>
       <Myfunction/>
       <Myarrow/>
       <SingleArrow/>
       <Button variant='contained' onClick={HandleClick} style={{marginRight:"20px"}}>Click me</Button>
       <Button variant='outlined' onClick={()=>console.log("Hello")}>Greet</Button>
       <Button onClick={()=>HandleArguments("Shreya")}>Passing arguments</Button>
    </div>
  )
}

export default Arrowfunction