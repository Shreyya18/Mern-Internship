import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { border } from '@mui/system';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const products=[
  {
    image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQDpqtwTfTEzPXqhlwf03P2M5UxnIhuToGxsOjjoQA1sQ_UrNzTIMBtSOh2rMIfVGUOkZfg5sC4zWw-MrH-hpA6q8Kn4m4TTVhvRu73N8DUmpNzo13r9fBzpQ",
    name:"book",
    price:200,
    quantity:2,
    description:"React book for beginners, 200 pages, 20 chapters"
  },
  {
    image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS7CE-383hytmgghcwA_Wcgr-8Xul6orINBiS8x1mrYRBkk1OVxB1CCSkr0mmey2HtL69_nZTjnzJE2jSdlfMV1mTi--7UMlvI8ot-nvsgBjiPP6u-TPV5JlQ",
    name:"mobile",
    price:20000,
    quantity:1,
    description:"Redmi note 12 pro, 6gb ram, 128gb storage"
  },
  {
    image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRfMznV9wm2Fw69IXm4bIcbTdmwgxschmOr-8ZZCx_l4hQF00qbBVuTW46Tt35uKye5uZ3EpZt6PWwS2BQYiqd7GUkdlMfR5dIf9h5YlYE0h4IWbWFDAJuFfw",
    name:"Laptop",
    price:50000,
    quantity:1,
    description:"HP laptop, core i5, 8gb ram, 512gb ssd"
  }
]
export default function BasicTable() {
  // return (
  //   <TableContainer component={Paper}>
  //     <Table sx={{ minWidth: 650 }} aria-label="simple table">
  //       <TableHead>
  //         <TableRow>
  //           <TableCell>Dessert (100g serving)</TableCell>
  //           <TableCell align="right">Calories</TableCell>
  //           <TableCell align="right">Fat&nbsp;(g)</TableCell>
  //           <TableCell align="right">Carbs&nbsp;(g)</TableCell>
  //           <TableCell align="right">Protein&nbsp;(g)</TableCell>
  //         </TableRow>
  //       </TableHead>
  //       <TableBody>
  //         {rows.map((row) => (
  //           <TableRow
  //             key={row.name}
  //             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
  //           >
  //             <TableCell component="th" scope="row">
  //               {row.name}
  //             </TableCell>
  //             <TableCell align="right">{row.calories}</TableCell>
  //             <TableCell align="right">{row.fat}</TableCell>
  //             <TableCell align="right">{row.carbs}</TableCell>
  //             <TableCell align="right">{row.protein}</TableCell>
  //           </TableRow>
  //         ))}
  //       </TableBody>
  //     </Table>
  //   </TableContainer>
  // );
     
  
  
  return (
      <TableContainer sx={{border:2, width:"50%", margin:"50px auto"}} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
            </TableHead>

            <TableBody >
              {products.map((data)=>(
                <TableRow sx={{border:2}}>
                <TableCell><img src={data.image} width={100}></img></TableCell>
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.price}</TableCell>
                <TableCell>{data.quantity}</TableCell>
                <TableCell>{data.description}</TableCell>
              </TableRow>
              ))}
            </TableBody>
        </Table>
      </TableContainer>
     )
}
