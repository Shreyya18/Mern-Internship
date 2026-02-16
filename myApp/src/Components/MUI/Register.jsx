import React from 'react'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const Register = () => {

  return (
    <div>
      <Paper elevation={20} style={{ width: "500px", padding: "25px" , margin:"50px auto"}}>
        <Typography variant='h4' style={{textAlign:"center", marginBottom:"20px", color:"cornflowerblue"}}>Register Page</Typography>
        <TextField type='text' label="Name" fullWidth style={{ marginBottom: "10px"}} />
        <TextField type='email' label="Email" fullWidth style={{ marginBottom: "10px" }} />
        <TextField type='pasword' label="Password" fullWidth style={{ marginBottom: "10px" }} />
        <TextField type='number' label="Phone" fullWidth style={{ marginBottom: "10px" }} />
        <TextField multiline rows={3} label="Address" fullWidth style={{ marginBottom: "10px" }} />
        
        <Button variant="contained" fullWidth >Register</Button>


      </Paper>
    </div>
  )
}

export default Register