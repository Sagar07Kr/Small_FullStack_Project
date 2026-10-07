
const exprees = require('express');
const app  = exprees();
const mongoose = require('mongoose');
const product = require('./data.js')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

app.get("/", (req,res) => {
    res.send(product);
})

app.listen(3000,()=>{
    console.log('server is live on port no 3000');
    
})