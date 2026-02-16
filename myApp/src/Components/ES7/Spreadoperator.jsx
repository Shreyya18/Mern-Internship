import React from 'react'
// Spread operator is used to combine two arrays or objects or to create a copy of an array or object without mutating the original one. It is denoted by three dots (...).
const SpreadOperator = () => {
    const arr1=[1,2,3,4,5]
    const arr2=[6,7,8,9,10]

    const combinedArray=[...arr1, ...arr2]

    const obj1=[
        {
            name:"user1",
            email:"user1@gmail.com",
            phone:"8765432345",
        },
        {
            name:"user2",
            email:"user2@gmail.com",
            phone:"8765432345",
        }
    ]

    const obj2=[
        {
            name:"user3",
            email:"user3@gmail.com",
            phone:"8765432345",
        },
        {
            name:"user4",
            email:"user4@gmail.com",
            phone:"8765432345",
        }
    ]

    const combinedObj=[...obj1, ...obj2]
  return (
    <>
    <div>{combinedObj.map((data)=>{
        return(
            <>
            <h3>{data.name}</h3>
            <h3>{data.email}</h3>
            <h3>{data.phone}</h3>
            </>
        )
        })}
    </div>
    </>
  )
}

export default SpreadOperator