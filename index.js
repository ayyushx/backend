require('dotenv').config() //To import the usage of .env file
const express = require('express');
const app = express();

const port = 4000; //This is local variable but we also have global variable declared inside .env file

app.get('/', (req,res) => {
    res.send("Hello World");
});

app.get('/twitter', (req,res) => { // the '/' demonstrates the page we are going to visit
    res.send("<h1>Twitter Page</h1>");
})

app.listen(process.env.PORT, () => {
    console.log(`listening at port ${process.env.PORT}`);
});