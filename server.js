const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app  = express();

app.use(express.json())

app.get('/api/nicolas', (_, res)=>{
    res.send({
        message:'Bonjour tout le monde ! '
    })
})

app.listen(5000,()=>{
    console.log('Le serveur 5000 est lancé.');
});