import React from 'react'
const Destructuring = () => {
    const number = [1,2,3,4,5,6]

    const [ , ,c,d,e] = number

    const num4=number[3];

    const object=[{
        name:"user1", 
        age:19
    },
    {
        name:"user2",
        age:20
    }
]

    const  [{name,age}]=object
  return (
    <div>{c},{e}, {num4}
        <h5>{name}</h5>
        <h6>{age}</h6>
        
    </div>
  )
}

export default Destructuring