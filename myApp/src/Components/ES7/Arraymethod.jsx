import React from 'react'

const Arraymethod = () => {
    const Student = [
        {
            name: "user1",
            email: "user1@example.com",
            phone: 8765342345,
            address: "123 Main St, City, Country"

        },
        {
            name: "user2",
            email: "user2@example.com",
            phone: 8765342345,
            address: "123 Main St, City, Country"

        },
        {
            name: "user3",
            email: "user3@example.com",
            phone: 8765342345,
            address: "123 Main St, City, Country"

        },
        {
            name: "user4",
            email: "user4@example.com",
            phone: 8765342345,
            address: "123 Main St, City, Country"

        }
    ]
    console.log(Student)

    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <>
            <div>
                {num.map((data) => (
                    <h3>{data}</h3>
                )
                )}
            </div>

            {/* // <p>{num}</p> */}

            {/* <div>
                {Student.map((data) => (
                    <>
                        <h3>{data.name} </h3>
                        <h3>{data.email} </h3>
                        <h3>{data.phone} </h3>
                    </>
                )
                )}
            </div> */}

            <table border="2">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>email</th>
                        <th>Phone</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody >
                    {Student.map((data) => {
                        return(
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.phone}</td>
                            <td>{data.address}</td>
                        </tr>
                        )
                    }
                    )}
                </tbody>
            </table>

        </>
    )
}

export default Arraymethod