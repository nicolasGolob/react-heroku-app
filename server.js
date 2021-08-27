const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app  = express();

app.listen(5000,()=>{
    console.log('Le serveur 5000 est lancé.');
});