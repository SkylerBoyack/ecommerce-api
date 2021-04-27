const express = require('express');
const getProducts = require('./getProducts');
const getProduct = require('./getProduct')


const app = express();

app.get('/api/products', getProducts);
app.get('/api/products/:id', getProduct);




const port = 3222

app.listen(port,()=>{console.log(`Server is vibing on port: ${port}`)})