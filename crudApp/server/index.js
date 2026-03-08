const express = require('express');
const dbConnection = require('./db');
//  express is a web framework, which responsible to handle incoming request and response

const app = express();
//  app is an instance of express, which is used to define routes and middleware and handle request and response

const PORTNUMBER=7000;
// PORTNUMBER on which server listens to

// app.listen is the method that statrts the server and listens to incoming request on that specified port number
app.listen(PORTNUMBER, ()=>{
    // console.log('Server is running on port number:'+ PORTNUMBER);
    // or we can use template literals to print the port number
    console.log(`Server is running on port number: ${PORTNUMBER}`);
    // this callback function is executed when the server is started
})
dbConnection();
// app.get is the method that definnes a route for handling request(POST,GET, PUT, DELETE )

//  /apitest is endpoint
//  req is a request object that contains information about incoing request
//  res is response object that used to send response back to the client
app.get('/apitest', (req, res)=>{
    res.send("Hello Server"); // response text from server
})