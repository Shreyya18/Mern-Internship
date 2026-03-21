import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { border } from '@mui/system';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';


const ViewProduct = () => {
  const[products, setProducts]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:7000/product/getproduct')
    .then((res)=>{
      console.log(res.data.allproducts)
      setProducts(res.data.allproducts)
    })
    .catch((error)=>{
      console.log(error)
    })
  })

  const HandleDelete=(uid)=>{
    axios.delete(`http://localhost:7000/product/deleteproduct/${uid}`)
    .then((res)=>{
      console.log(res)
      alert("Product deleted")
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  return (
    <div>
      <TableContainer>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Product Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.product_name}>
              <TableCell>{product.product_name}</TableCell>
              <TableCell>{product.product_price}</TableCell>
              <TableCell>{product.product_qty}</TableCell>
              <TableCell>{product.product_description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default ViewProduct