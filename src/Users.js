import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'


export default function Users() {
    const [data, setData] = useState([])
    useEffect(() => {
        let url = "http://jsonplaceholder.typicode.com/users";
        fetch(url).then((responce) => {
            responce.json().then((result) => {
                console.warn('result', result)
                setData(result)
            })
        })

    }, [])
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>firstName</th>
                        <th>City</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item)=>(
                            <tr>
                                <td>{item.id} </td>
                                <td>{item.name}</td>
                                <td>{item.address.city}</td>
                                <td>{item.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>

        </div>
    )
}    
