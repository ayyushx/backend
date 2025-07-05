require('dotenv').config() //To import the usage of .env file
const express = require('express');
const app = express();

const port = 4000 || process.env.PORT; //This is local variable but we also have global variable declared inside .env file

app.get('/', (req,res) => {
    res.send("Hello World");
});

app.get('/twitter', (req,res) => { // the '/' demonstrates the page we are going to visit
    res.send("<h1>Twitter Page</h1>");
})

app.get('/welcome', (req,res) =>{
    res.send("<h1>Just got back to learn backend web development, that'y a new page</h1> ")
})

app.listen(port, () => {
    console.log(`listening at port ${port}`); //Either of the values will be used for determining the port 
});


