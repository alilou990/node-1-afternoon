const express = require('express');
// const products = require('../products.json');
const getProducts = require('./getProducts');
const getProduct = require('./getProduct')

const app = express();


//Endpoints
app.get('/api/products', getProducts)

app.get('/api/product/:id', getProduct)


app.listen(3006, ()=> {
    console.log('Server 3006 is up and running! 👻')
})