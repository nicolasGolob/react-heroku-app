const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app  = express();

app.use(express.json());
//we specify that we will use json

app.get('/api/nicolas', (_, res)=>{
    //here we have the request and the answer for this url
    //when we call the api/nicolas address, express will answer us with a message subject: " ".
    res.send({
        message:'Bonjour tout le monde !'
    })
})

app.listen(5000,()=>{
    console.log('Le serveur 5000 est lancé.');
});