const express = require('express');
const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app  = express();

app.use(express.json());
//we specify that we will use json

app.use(express.static('front/build'));
//here it says you can use these static files, the door is opened for him to enter this file


app.get('/api/nicolas', (_, res)=>{
    //here we have the request and the answer for this url
    //when we call the api/nicolas address, express will answer us with a message subject: " ".
    res.send({
        message:'Hello everyone !'
    })
})

app.get('./*', (_, res)=>{
    //instead of sending data we will send a file
    //path.join allows you to combine two pieces of address to create one
    //you go to this file and send all the traffic to it
    res.sendFile(path.join(__dirname, './front/build/index.html'))
})

app.listen(5000,()=>{
    console.log('Le serveur 5000 est lancé.');
});