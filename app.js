const express = require("express");
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, 'public' , 'index.html'));
});

app.get('/login',(req,res) => {
    res.sendFile(path.join(__dirname, 'public' , 'login/index.html'));
});

app.listen(3000,()=> {
    console.log("it is working");
});